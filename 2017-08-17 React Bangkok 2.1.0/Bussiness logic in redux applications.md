# Bussiness logic in redux applications

Speaker: Patrick Oladimeji
Position: software engineer
Company: ThoughtWorks

## Core Redux
- Store เดียว ใช้งานได้สะดวก
- Actions is pure object สำหรับ เปลี่ยนแปลงค่าใน Store
- Reducers
- Middleware

## Redux Add-ons
- Middleware Implementations -> redux-saga, redux-thunk, redux-observable

## React-Redux
- connect - HOC
- mapStateToProps - ส่งค่าใน Store เข้าไปยัง Local state
- mapDispatchToProps - ส่ง Function ที่ใช้ใน Action เข้าไปยัง Local state

## How about the business logic
- where do we put it? 
- who should be aware of it?

## Example of business logic
- Calculation routines
- Validation routines
- Authorization

## The where is easy
- Create a folder (call it 'business-foo')
- Structure it by business objects
- คิดเป็น Lib เผื่อไว้สำหรับ App อื่นๆ

# Atomic Design with Next.js

Speaker: Pallop Chao (Ham)
Position: Software Engineer
Company: Jitta

## What is Next.js?
- อีก Version นึงของ create-react-app
- React Framework

## Why Next.js?
- zero-configuration ลงเสร็จใช้งานได้ทันที
- build-in server-rendering

## My opnition about React
- หากใช้ create-react-app จะสังเกตว่า react มีการอัพเดตตลอดเวลาจะเกิด Breake change ได้ง่าย
- React ทำ Server-side-rendering ได้ยาก Config เยาะ

## Project Structure
- Componentes ถ้ามี Components ให้ใส่ไว้ในนี้
- Pages ให้ใส่ไว้ใน Pages
- พอเราสร้างไฟล์ในที่ๆกำหนด สิ่งที่ได้ต่อมาคือ routing 

## Routing
- 1 file = 1 page
- Subpath - nested file
- Maintenance - rename over

## Async loading
- Next.js ทำให้แล้วโดยมี function ให้ใช้งาน getIntialProps()

## HMR
- Hot Module Replacement (HMR) เวลาแก้ไขไฟล์จะทำการ Reload ให้เรา
- เวลาแก้ไขไฟล์จะ reload แต่ state จะไม่เปลี่ยน ทำให้ test หรือ dev ได้สะดวก

## Document
- เขียนไว้ค่อนข้างดี
- https://learnnextjs.com ไว้สำหรับเรียน
- Directory examples in Github มีไฟล์ตัวอย่างไว้ให้

## Note
- Support ES6

ต่อไปเป็นการทดลองสร้าง project จาก next.js
สร้าง Project ตาม
Install fetch

Example
``` javascript
const Page = ({ name, aliases }) => {
  <div>
    <h1>{name}</h1>
    {aliases.map((value) => {
      return <div>{value.alias}</div>
    })}
  </div>
}

Page.getInitialProps = async () => {
  const response = await fetch('')
  const data = await response.json()
  return data
}

export default Page
```

## Atomic Design
- ประกอบด้วย 5 ส่วน
    - ATOMS - คือพวก Label เป็นส่วนที่เล็กที่สุด
    - MOLECULES - คือ Group of ATOMS หรือพวกสิ่งเล็กๆอย่าง Label Input มารวมกันเป็น Molecules ได้
    - ORGANISMS - คือ Group of Molecules เช่น Nav-bar Site-nav ประกอบด้วย เมนูหลายๆเมนู จัดการ state ดึงข้อมูล
    - TEMPLATES - คือ Group of Organisims คือพวก Layouts ต่างๆว่า มี Header title content manu navbar
    - PAGES - คือ Templates ที่เอา Data มาใส่
- คือแนวคิดเอาไว้ประยุกต์ใช้กับอะไรก็ได้

## Similar with Next.js
- Atomic Design มีความคล้ายกับ Structure ของ Next.js
- Atom/Molecules อยู่ใน /components
- Organisms อยู่ใน /organisms แยกออกมาจาก component ไปเลย
- Templates อาจจะเอาไว้ใน /layouts หรือ /pages ก็ได้ถ้า code ยังอ่านง่าย
- Pages อยู่ใน /pages

## Case study www.twitter.com
- ลองแยก Layouts ต่างๆของ twitter

