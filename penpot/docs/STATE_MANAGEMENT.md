# CHATFLOW — STATE MANAGEMENT ARCHITECTURE

**Yaratilgan:** 2026-02-12  
**Maqsad:** Frontend state management arxitekturasini aniqlash  
**Stack:** React 18+ + TypeScript 5+ + Zustand 4+ + React Query 5+

---

## MUNDARIJA

1. [Stack Overview](#1-stack-overview)
2. [State Kategoriyalari](#2-state-kategoriyalari)
3. [Zustand Store Tuzilishi](#3-zustand-store-tuzilishi)
4. [React Query Data Fetching](#4-react-query-data-fetching)
5. [WebSocket Real-time Integration](#5-websocket-real-time-integration)
6. [Persistence Strategy](#6-persistence-strategy)
7. [Performance Optimization](#7-performance-optimization)
8. [Testing Strategy](#8-testing-strategy)

---

## 1. STACK OVERVIEW

### Frontend Stack

| Texnologiya | Versiya | Maqsad |
|-------------|---------|--------|
| React | 18.2+ | UI framework |
| TypeScript | 5.0+ | Type safety |
| Zustand | 4.4+ | Global state management |
| React Query | 5.0+ | Server state & caching |
| Socket.IO Client | 4.6+ | Real-time WebSocket |
| Immer | 10.0+ | Immutable state updates |
| Zod | 3.22+ | Runtime validation |

### Why This Stack?

**Zustand vs Redux Toolkit:**
- ✅ Minimal boilerplate (no actions/reducers/thunks)
- ✅ TypeScript-first with excellent inference
- ✅ No Context Provider wrapper needed
- ✅ Smaller bundle size (~1KB vs ~12KB)
- ✅ Built-in devtools support
- ✅ Easy to test

**React Query vs SWR:**
- ✅ More powerful mutation handling
- ✅ Better TypeScript support
- ✅ Optimistic updates easier
- ✅ Automatic retries and background refetch
- ✅ Query cancellation and deduplication
- ✅ DevTools included

---

## 2. STATE KATEGORIYALARI

### 2.1. Client State (Zustand)

**UI State** — Faqat frontend uchun zarur
- Sidebar collapsed/expanded
- Modal open/closed
- Active tab/filter selections
- Theme (light/dark)
- Language preference
- Notification panel open/closed

**Temporary State** — Vaqtinchalik ma'lumotlar
- Form draft values
- Search query input
- Selected items (multi-select)
- Clipboard data
- Toast messages queue

**Authentication State** — User session
- Current user info (id, name, email, role, avatar)
- Workspace info (id, name, plan, settings)
- Auth tokens (access token, refresh token)
- Permissions matrix

**Real-time Connection State** — WebSocket holati
- Connection status (connected/disconnected/reconnecting)
- Subscribed channels
- Pending messages queue
- Last ping/pong timestamps

### 2.2. Server State (React Query)

**Data Fetching** — Backend'dan olingan ma'lumotlar
- Chats list
- Contacts list
- Team members
- Analytics data
- Settings
- Invoices

**Caching Strategy:**
- Chats: `staleTime: 30s`, `cacheTime: 5m`
- Contacts: `staleTime: 5m`, `cacheTime: 30m`
- Analytics: `staleTime: 1m`, `cacheTime: 10m`
- Settings: `staleTime: Infinity`, `cacheTime: Infinity`

### 2.3. URL State (React Router)

**Route Parameters** — URL orqali boshqariladi
- Current page/route
- Chat ID, Contact ID, etc.
- Filter/search query params
- Pagination (page, limit)
- Sort order

---

## 3. ZUSTAND STORE TUZILISHI

### 3.1. Store Architecture

```typescript
// src/stores/
├── useAuthStore.ts           // Authentication & user
├── useUIStore.ts             // UI state (sidebar, modals, theme)
├── useWebSocketStore.ts      // WebSocket connection
├── useChatStore.ts           // Real-time chat messages
├── useNotificationStore.ts   // Real-time notifications
└── index.ts                  // Export all stores
```

### 3.2. Example: useAuthStore.ts

```typescript
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'operator';
  avatar?: string;
}

interface Workspace {
  id: string;
  name: string;
  plan: 'free' | 'pro' | 'business';
  settings: Record<string, any>;
}

interface AuthState {
  // State
  user: User | null;
  workspace: Workspace | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  
  // Actions
  setUser: (user: User) => void;
  setWorkspace: (workspace: Workspace) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      immer((set, get) => ({
        // Initial state
        user: null,
        workspace: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,

        // Actions
        setUser: (user) =>
          set((state) => {
            state.user = user;
            state.isAuthenticated = true;
          }),

        setWorkspace: (workspace) =>
          set((state) => {
            state.workspace = workspace;
          }),

        setTokens: (accessToken, refreshToken) =>
          set((state) => {
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.isAuthenticated = true;
          }),

        logout: () =>
          set((state) => {
            state.user = null;
            state.workspace = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
          }),

        hasPermission: (permission) => {
          const { user } = get();
          if (!user) return false;
          
          // Permission matrix logic
          const permissions = {
            admin: ['*'], // All permissions
            manager: ['chats.view', 'team.view', 'analytics.view'],
            operator: ['chats.own', 'profile.edit'],
          };
          
          const userPermissions = permissions[user.role] || [];
          return userPermissions.includes('*') || userPermissions.includes(permission);
        },
      })),
      {
        name: 'chatflow-auth', // LocalStorage key
        partialize: (state) => ({
          // Only persist these fields
          user: state.user,
          workspace: state.workspace,
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
        }),
      }
    ),
    { name: 'AuthStore' } // DevTools name
  )
);
```

### 3.3. Example: useUIStore.ts

```typescript
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UIState {
  // Sidebar
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  
  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  
  // Language
  language: 'uz' | 'ru' | 'en';
  setLanguage: (lang: 'uz' | 'ru' | 'en') => void;
  
  // Modals
  activeModal: string | null;
  modalData: any;
  openModal: (modalId: string, data?: any) => void;
  closeModal: () => void;
  
  // Notifications Panel
  notificationPanelOpen: boolean;
  toggleNotificationPanel: () => void;
  
  // Toast Queue
  toasts: Array<{ id: string; type: string; message: string }>;
  addToast: (toast: { type: string; message: string }) => void;
  removeToast: (id: string) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        sidebarCollapsed: false,
        theme: 'system',
        language: 'uz',
        activeModal: null,
        modalData: null,
        notificationPanelOpen: false,
        toasts: [],

        // Actions
        toggleSidebar: () =>
          set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

        setTheme: (theme) => set({ theme }),

        setLanguage: (language) => set({ language }),

        openModal: (modalId, data) =>
          set({ activeModal: modalId, modalData: data }),

        closeModal: () =>
          set({ activeModal: null, modalData: null }),

        toggleNotificationPanel: () =>
          set((state) => ({ notificationPanelOpen: !state.notificationPanelOpen })),

        addToast: (toast) =>
          set((state) => ({
            toasts: [
              ...state.toasts,
              { ...toast, id: Math.random().toString(36).substr(2, 9) },
            ],
          })),

        removeToast: (id) =>
          set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !== id),
          })),
      }),
      {
        name: 'chatflow-ui',
        partialize: (state) => ({
          sidebarCollapsed: state.sidebarCollapsed,
          theme: state.theme,
          language: state.language,
        }),
      }
    ),
    { name: 'UI Store' }
  )
);
```

### 3.4. Example: useChatStore.ts (Real-time)

```typescript
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface Message {
  id: string;
  conversation_id: string;
  sender_type: 'agent' | 'visitor';
  sender_id: string;
  text: string;
  created_at: string;
}

interface Conversation {
  id: string;
  visitor_name: string;
  status: 'active' | 'resolved';
  unread_count: number;
  last_message_at: string;
}

interface ChatState {
  // State
  conversations: Record<string, Conversation>;
  messages: Record<string, Message[]>; // { conversation_id: Message[] }
  activeConversationId: string | null;
  typingUsers: Record<string, string[]>; // { conversation_id: [user_id] }
  
  // Actions
  setConversations: (conversations: Conversation[]) => void;
  addConversation: (conversation: Conversation) => void;
  updateConversation: (id: string, updates: Partial<Conversation>) => void;
  
  setMessages: (conversationId: string, messages: Message[]) => void;
  addMessage: (conversationId: string, message: Message) => void;
  
  setActiveConversation: (conversationId: string | null) => void;
  
  setTyping: (conversationId: string, userId: string) => void;
  removeTyping: (conversationId: string, userId: string) => void;
}

export const useChatStore = create<ChatState>()(
  devtools(
    immer((set) => ({
      // Initial state
      conversations: {},
      messages: {},
      activeConversationId: null,
      typingUsers: {},

      // Actions
      setConversations: (conversations) =>
        set((state) => {
          conversations.forEach((conv) => {
            state.conversations[conv.id] = conv;
          });
        }),

      addConversation: (conversation) =>
        set((state) => {
          state.conversations[conversation.id] = conversation;
        }),

      updateConversation: (id, updates) =>
        set((state) => {
          if (state.conversations[id]) {
            Object.assign(state.conversations[id], updates);
          }
        }),

      setMessages: (conversationId, messages) =>
        set((state) => {
          state.messages[conversationId] = messages;
        }),

      addMessage: (conversationId, message) =>
        set((state) => {
          if (!state.messages[conversationId]) {
            state.messages[conversationId] = [];
          }
          state.messages[conversationId].push(message);
          
          // Update conversation's last_message_at
          if (state.conversations[conversationId]) {
            state.conversations[conversationId].last_message_at = message.created_at;
          }
        }),

      setActiveConversation: (conversationId) =>
        set({ activeConversationId: conversationId }),

      setTyping: (conversationId, userId) =>
        set((state) => {
          if (!state.typingUsers[conversationId]) {
            state.typingUsers[conversationId] = [];
          }
          if (!state.typingUsers[conversationId].includes(userId)) {
            state.typingUsers[conversationId].push(userId);
          }
        }),

      removeTyping: (conversationId, userId) =>
        set((state) => {
          if (state.typingUsers[conversationId]) {
            state.typingUsers[conversationId] = state.typingUsers[conversationId].filter(
              (id) => id !== userId
            );
          }
        }),
    })),
    { name: 'ChatStore' }
  )
);
```

---

## 4. REACT QUERY DATA FETCHING

### 4.1. Query Client Setup

```typescript
// src/lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000, // 30 seconds
      cacheTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
});
```

### 4.2. Example: useChats Hook

```typescript
// src/hooks/useChats.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

interface Chat {
  id: string;
  visitor_name: string;
  status: string;
  unread_count: number;
}

interface ChatsFilters {
  status?: 'active' | 'assigned' | 'closed';
  agent_id?: string;
  page?: number;
  limit?: number;
}

// Query: List chats
export function useChats(filters: ChatsFilters = {}) {
  return useQuery({
    queryKey: ['chats', filters],
    queryFn: () => api.get<{ data: Chat[] }>('/chats', { params: filters }),
    select: (response) => response.data,
    staleTime: 30_000,
  });
}

// Query: Get chat detail
export function useChat(chatId: string) {
  return useQuery({
    queryKey: ['chats', chatId],
    queryFn: () => api.get<Chat>(`/chats/${chatId}`),
    enabled: !!chatId,
    staleTime: 60_000,
  });
}

// Mutation: Assign chat
export function useAssignChat() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { chat_id: string; agent_id: string }) =>
      api.post(`/chats/${data.chat_id}/assign`, { agent_id: data.agent_id }),
    
    onMutate: async (data) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['chats', data.chat_id] });
      
      const previousChat = queryClient.getQueryData(['chats', data.chat_id]);
      
      queryClient.setQueryData(['chats', data.chat_id], (old: any) => ({
        ...old,
        assigned_to: data.agent_id,
        status: 'assigned',
      }));
      
      return { previousChat };
    },
    
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousChat) {
        queryClient.setQueryData(['chats', variables.chat_id], context.previousChat);
      }
    },
    
    onSettled: (data, error, variables) => {
      // Refetch after mutation
      queryClient.invalidateQueries({ queryKey: ['chats', variables.chat_id] });
      queryClient.invalidateQueries({ queryKey: ['chats'] });
    },
  });
}
```

### 4.3. Infinite Scroll Example

```typescript
// src/hooks/useInfiniteChats.ts
import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export function useInfiniteChats() {
  return useInfiniteQuery({
    queryKey: ['chats', 'infinite'],
    queryFn: ({ pageParam = 1 }) =>
      api.get('/chats', {
        params: { page: pageParam, limit: 20 },
      }),
    getNextPageParam: (lastPage, pages) => {
      const { pagination } = lastPage.data;
      return pagination.page < pagination.pages ? pagination.page + 1 : undefined;
    },
    staleTime: 30_000,
  });
}

// Usage in component:
// const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteChats();
// <InfiniteScroll onLoadMore={fetchNextPage} hasMore={hasNextPage} />
```

---

## 5. WEBSOCKET REAL-TIME INTEGRATION

### 5.1. WebSocket Setup

```typescript
// src/lib/socket.ts
import { io, Socket } from 'socket.io-client';
import { useAuthStore } from '@/stores/useAuthStore';

let socket: Socket | null = null;

export function initSocket() {
  const { accessToken } = useAuthStore.getState();
  
  socket = io('wss://ws.chatflow.uz', {
    auth: {
      token: accessToken,
    },
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 30000,
  });
  
  socket.on('connect', () => {
    console.log('✅ WebSocket connected');
  });
  
  socket.on('disconnect', (reason) => {
    console.log('❌ WebSocket disconnected:', reason);
  });
  
  socket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
  
  return socket;
}

export function getSocket() {
  if (!socket) {
    throw new Error('Socket not initialized. Call initSocket() first.');
  }
  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
```

### 5.2. WebSocket Event Naming Convention

**Pattern:** `{resource}.{action}` (singular, dot notation)

| Resource | Event | Format |
|----------|-------|--------|
| Message | Yangi | `message.new` |
| Message | Yuborildi | `message.sent` |
| Message | O'qildi | `message.read` |
| Message | O'chirildi | `message.deleted` |
| Conversation | Yangi | `conversation.new` |
| Conversation | Assign qilindi | `conversation.assigned` |
| Conversation | Tugadi | `conversation.closed` |
| Conversation | Qayta ochildi | `conversation.reopened` |
| Conversation | Typing | `conversation.typing` |
| Agent | Online | `agent.online` |
| Agent | Offline | `agent.offline` |
| Agent | Typing | `agent.typing` |
| Visitor | Yangi | `visitor.new` |
| Visitor | Typing | `visitor.typing` |
| Notification | Yangi | `notification.new` |

### 5.3. WebSocket Event Listeners

```typescript
// src/hooks/useSocketEvents.ts
import { useEffect } from 'react';
import { getSocket } from '@/lib/socket';
import { useChatStore } from '@/stores/useChatStore';
import { useNotificationStore } from '@/stores/useNotificationStore';
import { useQueryClient } from '@tanstack/react-query';

export function useSocketEvents() {
  const queryClient = useQueryClient();
  const { addMessage, updateConversation, setTyping, removeTyping } = useChatStore();
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    const socket = getSocket();

    // Chat events
    socket.on('message.new', (data) => {
      addMessage(data.conversation_id, data.message);
      
      // Invalidate React Query cache
      queryClient.invalidateQueries({ queryKey: ['chats', data.conversation_id] });
    });

    socket.on('conversation.assigned', (data) => {
      updateConversation(data.conversation_id, {
        assigned_to: data.agent_id,
        status: 'assigned',
      });
      
      queryClient.invalidateQueries({ queryKey: ['chats'] });
    });

    socket.on('conversation.typing', (data) => {
      setTyping(data.conversation_id, data.user_id);
      
      // Clear after 3 seconds
      setTimeout(() => {
        removeTyping(data.conversation_id, data.user_id);
      }, 3000);
    });

    // Notification events
    socket.on('notification.new', (notification) => {
      addNotification(notification);
      
      // Show desktop notification if enabled
      if (Notification.permission === 'granted') {
        new Notification(notification.title, {
          body: notification.description,
          icon: '/logo.png',
        });
      }
    });

    // Cleanup
    return () => {
      socket.off('message.new');
      socket.off('conversation.assigned');
      socket.off('conversation.typing');
      socket.off('notification.new');
    };
  }, [addMessage, updateConversation, setTyping, removeTyping, addNotification, queryClient]);
}
```

---

## 6. PERSISTENCE STRATEGY

### 6.1. LocalStorage Persistence (Zustand)

**Saqlangan state:**
- Auth tokens (access, refresh)
- User va workspace info
- UI preferences (theme, language, sidebar)

**Saqlanmaydigan state:**
- Temporary form data
- Toast messages
- WebSocket connection status

### 6.2. SessionStorage

**Ishlatilishi:**
- Draft messages (chat input)
- Form progress (multi-step forms)
- Scroll positions

### 6.3. IndexedDB (Future)

**Katta hajmli ma'lumotlar uchun:**
- Offline chat history cache
- File attachments metadata
- Search index

---

## 7. PERFORMANCE OPTIMIZATION

### 7.1. Zustand Selectors

```typescript
// ❌ Bad: Re-renders on any auth state change
const authState = useAuthStore();

// ✅ Good: Only re-renders when user changes
const user = useAuthStore((state) => state.user);
```

### 7.2. React Query Optimization

**Select specific fields:**
```typescript
useQuery({
  queryKey: ['user', userId],
  queryFn: () => api.get(`/users/${userId}`),
  select: (data) => ({
    // Only return what we need
    name: data.name,
    avatar: data.avatar,
  }),
});
```

**Prefetching:**
```typescript
queryClient.prefetchQuery({
  queryKey: ['chats'],
  queryFn: () => api.get('/chats'),
});
```

### 7.3. Code Splitting

```typescript
// Lazy load heavy components
const Analytics = lazy(() => import('@/pages/Analytics'));
const Billing = lazy(() => import('@/pages/Billing'));
```

---

## 8. TESTING STRATEGY

### 8.1. Zustand Store Tests

```typescript
// src/stores/__tests__/useAuthStore.test.ts
import { renderHook, act } from '@testing-library/react';
import { useAuthStore } from '../useAuthStore';

describe('useAuthStore', () => {
  beforeEach(() => {
    useAuthStore.getState().logout(); // Reset state
  });

  it('should set user and authenticate', () => {
    const { result } = renderHook(() => useAuthStore());
    
    act(() => {
      result.current.setUser({
        id: '123',
        name: 'Test User',
        email: 'test@test.com',
        role: 'admin',
      });
    });
    
    expect(result.current.user?.name).toBe('Test User');
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should check permissions correctly', () => {
    const { result } = renderHook(() => useAuthStore());
    
    act(() => {
      result.current.setUser({
        id: '123',
        name: 'Operator',
        email: 'op@test.com',
        role: 'operator',
      });
    });
    
    expect(result.current.hasPermission('chats.own')).toBe(true);
    expect(result.current.hasPermission('team.delete')).toBe(false);
  });
});
```

### 8.2. React Query Tests

```typescript
// src/hooks/__tests__/useChats.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useChats } from '../useChats';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useChats', () => {
  it('should fetch chats successfully', async () => {
    const { result } = renderHook(() => useChats(), { wrapper });
    
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    
    expect(result.current.data).toBeDefined();
  });
});
```

---

## SUMMARY

✅ **Zustand** - Client state (UI, auth, real-time)  
✅ **React Query** - Server state (data fetching, caching)  
✅ **Socket.IO** - Real-time WebSocket events  
✅ **LocalStorage** - Persistence (auth, preferences)  
✅ **TypeScript** - Type safety va IntelliSense  
✅ **Immer** - Immutable updates  
✅ **Zod** - Runtime validation  

**Next Steps:**
1. ✅ Setup base stores (auth, UI, chat, notification)
2. ⏳ Implement React Query hooks for all API endpoints
3. ⏳ Integrate WebSocket event listeners
4. ⏳ Add persistence layer
5. ⏳ Write unit tests
6. ⏳ Performance optimization

---

**Oxirgi yangilanish:** 2026-02-12
