#!/usr/bin/env node

const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const API_KEY = process.env.PENPOT_API_KEY;
const API_URL = process.env.PENPOT_API_URL;

console.log('🔍 Testing Penpot API Connection\n');
console.log(`API URL: ${API_URL}`);
console.log(`Token: ${API_KEY?.substring(0, 20)}...${API_KEY?.substring(API_KEY.length - 20)}`);
console.log('');

async function test() {
  try {
    // Test 1: Direct API call
    console.log('📡 Test 1: Sending get-profile request...\n');
    
    const response = await axios.post(
      `${API_URL}/get-profile`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${API_KEY}`,
        }
      }
    );
    
    console.log('✅ Success!');
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
  } catch (error) {
    console.log('❌ Error:\n');
    console.log('Status:', error.response?.status);
    console.log('Status Text:', error.response?.statusText);
    console.log('Data:', JSON.stringify(error.response?.data, null, 2));
    console.log('Headers:', JSON.stringify(error.response?.headers, null, 2));
    console.log('Message:', error.message);
    
    console.log('\n💡 Possible solutions:');
    console.log('1. Token may be expired - generate a new one in Penpot');
    console.log('2. API might use different authorization format');
    console.log('3. Check if API endpoint is correct');
  }
}

test();
