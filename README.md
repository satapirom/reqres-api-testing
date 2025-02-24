# Reqres API Testing

ทดสอบ API สำหรับ **สร้าง**, **ดึงข้อมูล**, **อัปเดต**, และ **ลบ** ผู้ใช้ ด้วย **Playwright**, **AJV**, และ **Axios** 🎯


# 📦 Setup

ติดตั้ง dependencies กันก่อน:
   

    npm install
    npm install ajv
    npm  install axios

## 🚀 Run Tests

    npx playwright test

## 🔗 API Endpoints

-   **POST**  `/users` ➝ สร้างผู้ใช้ใหม่ 🆕
    
-   **GET**  `/users/{id}` ➝ ดึงข้อมูลผู้ใช้ 🔍
    
-   **PUT**  `/users/{id}` ➝ อัปเดตข้อมูล ✏️
    
-   **DELETE**  `/users/{id}` ➝ ลบผู้ใช้ ❌

## 📊 Reporting

    npx playwright test --reporter=html
    ดูรายงานใน `playwright-report/` 📂

## 🏆 Happy Testing! 🚀

