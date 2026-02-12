# API ENDPOINTS SPECIFICATION

## Base URL
- **Production:** `https://api.chatflow.uz/v1`
- **Staging:** `https://api-staging.chatflow.uz/v1`

## Authentication
- **Method:** Bearer Token
- **Header:** `Authorization: Bearer {api_key}`
- **API Key Location:** Developer → API Keys tab

## Rate Limits
- **Default:** 100 requests / minute / API key
- **Burst:** 20 requests / second
- **Headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`
- **429 Response:** Retry after `Retry-After` header (seconds)

---

## Chats API

### GET /chats
List all chats

**Query Parameters:**
- `status` (string): active, assigned, closed
- `agent_id` (string): Filter by agent
- `page` (integer): Default 1
- `limit` (integer): Default 20, max 100

**Response 200:**
```json
{
  "data": [
    {
      "id": "chat_abc123",
      "visitor_name": "Ali",
      "visitor_email": "ali@example.com",
      "status": "active",
      "assigned_to": "agent_xyz789",
      "unread_count": 3,
      "last_message_at": "2026-02-11T14:23:00Z",
      "created_at": "2026-02-11T13:15:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 145,
    "pages": 8
  }
}
```

### GET /chats/{chat_id}
Get chat details

**Response 200:**
```json
{
  "id": "chat_abc123",
  "visitor": {
    "name": "Ali",
    "email": "ali@example.com",
    "phone": "+998901234567",
    "metadata": {}
  },
  "status": "active",
  "assigned_to": "agent_xyz789",
  "tags": ["vip", "premium"],
  "notes": "Mijoz premium tarif haqida so'radi",
  "created_at": "2026-02-11T13:15:00Z",
  "updated_at": "2026-02-11T14:23:00Z"
}
```

### POST /chats/{chat_id}/messages
Send a message

**Request Body:**
```json
{
  "text": "Salom! Sizga qanday yordam bera olaman?",
  "attachments": [
    {
      "type": "image",
      "url": "https://cdn.chatflow.uz/files/abc123.jpg"
    }
  ]
}
```

**Response 201:**
```json
{
  "id": "msg_def456",
  "chat_id": "chat_abc123",
  "text": "Salom! Sizga qanday yordam bera olaman?",
  "sender": {
    "type": "agent",
    "id": "agent_xyz789",
    "name": "Sara"
  },
  "created_at": "2026-02-11T14:25:00Z"
}
```

### PATCH /chats/{chat_id}
Update chat

**Request Body:**
```json
{
  "status": "closed",
  "assigned_to": "agent_new123",
  "tags": ["resolved", "billing"],
  "notes": "Muammo hal qilindi"
}
```

**Response 200:** (same as GET /chats/{chat_id})

---

## Agents API

### GET /agents
List all agents

**Response 200:**
```json
{
  "data": [
    {
      "id": "agent_xyz789",
      "name": "Sara",
      "email": "sara@company.uz",
      "role": "operator",
      "status": "online",
      "active_chats": 5,
      "total_chats": 234
    }
  ]
}
```

### GET /agents/{agent_id}/stats
Get agent statistics

**Query Parameters:**
- `from` (ISO date): Start date
- `to` (ISO date): End date

**Response 200:**
```json
{
  "agent_id": "agent_xyz789",
  "period": {
    "from": "2026-02-01",
    "to": "2026-02-11"
  },
  "stats": {
    "total_chats": 145,
    "resolved_chats": 132,
    "avg_response_time_seconds": 135,
    "avg_resolution_time_minutes": 18,
    "csat_score": 4.7,
    "csat_responses": 98
  }
}
```

---

## Webhooks API

### GET /webhooks
List webhooks

**Response 200:**
```json
{
  "data": [
    {
      "id": "webhook_abc123",
      "url": "https://myapp.com/webhooks/chatflow",
      "events": ["chat.created", "message.sent"],
      "active": true,
      "created_at": "2026-01-15T10:00:00Z"
    }
  ]
}
```

### POST /webhooks
Create webhook

**Request Body:**
```json
{
  "url": "https://myapp.com/webhooks/chatflow",
  "events": ["chat.created", "chat.closed", "message.sent"],
  "secret": "your_webhook_secret"
}
```

**Response 201:**
```json
{
  "id": "webhook_abc123",
  "url": "https://myapp.com/webhooks/chatflow",
  "events": ["chat.created", "chat.closed", "message.sent"],
  "active": true,
  "secret": "whsec_*********************",
  "created_at": "2026-02-11T14:30:00Z"
}
```

---

## Analytics API

### GET /analytics/overview
Get overview statistics

**Query Parameters:**
- `from` (ISO date): Start date
- `to` (ISO date): End date
- `workspace_id` (string): Optional workspace filter

**Response 200:**
```json
{
  "period": {
    "from": "2026-02-01",
    "to": "2026-02-11"
  },
  "metrics": {
    "total_chats": 1256,
    "avg_response_time_seconds": 142,
    "avg_resolution_time_minutes": 22,
    "csat_score": 4.6,
    "first_contact_resolution_rate": 0.73
  },
  "trends": {
    "chats_change_percent": 12.5,
    "response_time_change_percent": -8.3
  }
}
```

### GET /analytics/agents
Get agent performance

**Query Parameters:**
- `from` (ISO date): Start date
- `to` (ISO date): End date
- `sort_by` (string): total_chats, csat_score, response_time

**Response 200:**
```json
{
  "data": [
    {
      "agent_id": "agent_xyz789",
      "name": "Sara",
      "total_chats": 145,
      "resolved_chats": 132,
      "avg_response_time_seconds": 110,
      "csat_score": 4.8,
      "csat_responses": 102
    }
  ]
}
```

---

## Widget Configuration API

### GET /widget/config
Get widget configuration

**Response 200:**
```json
{
  "color": "#4F46E5",
  "shape": "rounded",
  "position": "bottom-right",
  "button_text": "Yordam beramizmi?",
  "welcome_message": "Salom! Sizga qanday yordam bera olaman?",
  "offline_message": "Hozir offline holatdamiz",
  "domains": ["company.uz", "*.company.uz"],
  "branding": {
    "show_powered_by": false,
    "logo_url": "https://cdn.chatflow.uz/logos/company_logo.png"
  }
}
```

### PATCH /widget/config
Update widget configuration

**Request Body:**
```json
{
  "color": "#6366F1",
  "welcome_message": "Xush kelibsiz!"
}
```

**Response 200:** (same as GET /widget/config)

---

## Automation API

### GET /automation/triggers
Get all triggers

**Response 200:**
```json
{
  "data": [
    {
      "id": "trigger_abc123",
      "name": "Welcome Message",
      "condition": "page_load",
      "delay_seconds": 3,
      "message": "Sizga yordam kerakmi?",
      "active": true,
      "url_pattern": "*",
      "created_at": "2026-01-20T10:00:00Z"
    }
  ]
}
```

### POST /automation/triggers
Create trigger

**Request Body:**
```json
{
  "name": "Exit Intent",
  "condition": "exit_intent",
  "delay_seconds": 0,
  "message": "Ketayapsizmi? Yordam beraylikmi?",
  "url_pattern": "/pricing",
  "active": true
}
```

**Response 201:** (created trigger object)

---

## Files API

### POST /files/upload-url
Request presigned upload URL

**Request Body:**
```json
{
  "filename": "screenshot.png",
  "content_type": "image/png",
  "size_bytes": 245678
}
```

**Response 200:**
```json
{
  "upload_url": "https://s3.amazonaws.com/...",
  "file_id": "file_abc123",
  "expires_at": "2026-02-11T15:00:00Z"
}
```

### POST /files/confirm
Confirm file upload

**Request Body:**
```json
{
  "file_id": "file_abc123",
  "chat_id": "chat_abc123"
}
```

**Response 200:**
```json
{
  "id": "file_abc123",
  "url": "https://cdn.chatflow.uz/files/abc123.png",
  "filename": "screenshot.png",
  "size_bytes": 245678,
  "content_type": "image/png"
}
```

---

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "code": "AUTH-001",
    "message": "Email yoki parol noto'g'ri",
    "message_en": "Invalid email or password",
    "details": {},
    "request_id": "req_abc123xyz"
  }
}
```

**Common HTTP Status Codes:**
- `200` OK
- `201` Created
- `400` Bad Request
- `401` Unauthorized
- `403` Forbidden
- `404` Not Found
- `409` Conflict
- `413` Payload Too Large
- `429` Too Many Requests
- `500` Internal Server Error
- `503` Service Unavailable
