// rateLimiter.js
const rateLimit = require('express-rate-limit');

// สร้างฟังก์ชัน rateLimit ที่สามารถปรับแต่งการตั้งค่าได้
function createRateLimiter(windowMs = 15 * 60 * 1000, maxRequests = 10) {
  return rateLimit({
    windowMs, // กำหนดช่วงเวลาที่จำกัดจำนวนการทำคำขอ
    max: maxRequests, // กำหนดจำนวนคำขอสูงสุด
    message: 'Too many requests from this IP, please try again | <h1>why u so bad 😑.</h1>',
    headers: true, // แสดง headers ของ rate limit
  });
}

module.exports = { createRateLimiter };
