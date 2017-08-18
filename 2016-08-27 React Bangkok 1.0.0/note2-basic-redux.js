Redux
ปัญหาเมื่อเขียน React คือ การแบ่ง Compoent ต่างๆโดยส่งจาก แม่ ลงมาหาลูก แล้วมี  Component ใหม่ที่ไม่เกี่ยวข้องกับอะไรเลย แต่อยากรู้ข้อมูล
- สร้าง Component แม่ขึ้นมาใหม่แล้วย้าย function ไปยังแม่ แล้วส่งกลับมาอีกที

-----Redux Architecture-----
[Store]
ประกอบด้วย State กับ Reducer
- State คือค่าต่างๆจะถูกเก็บไว้ที่นี่เช่น state.num = 1 , this.setState(num:1)
- Reducer - รับคำสั่งและเปลี่ยน State

โปรแกรม Counter
1. View

const add = (num) => ({
    type:'ADD',
    payload:1
})

Pure function คือ function ที่คำนวนจาก input เท่านั้น
Reducer ต้องเป็น Pure function เท่านั้น
***funtion ห้ามแก้ไขค่าใน State ให้ return กลับไป***

[วิธีใช้ Store]
getState() ดึงค่าออก
dispatch(action) ใช้ส่งค่าเข้า
subscribe(listener) เอาไว้ติดตาม state ว่าทำอะไรบ้าง เช่นเอาไว้ console.log ดูว่ามันทำอะไรมาบ้าง

เริ่มจาก create store แล้วใส่ reducer เข้าไป
ติดตามด้วยมันด้วย subscribe และใช้งานด้วย dispatch กับ getState()

***ตั๊กบอก dispatch จะเกิด side effect ต้องมี Tool มาแก้เลยเอา redux-saka***
[Redux]
- มี Store เดียวเก็บทุก State

**functional composition เอาไป google ต่อ น่าสนใจ***


** setState ตัวเองรู้แต่เพื่อนๆอาจจะไม่รู้ **

npm install react-redux << แนะนำ

[การ test react+redux]
ใช้การ test  state แทนที่จะต้องไปดูหน้า View ว่าทำอะไร


*****Redux แก้ปัญหาการเก็บ State ของลูกค้า ว่าลูกค้าใช้ยังไง เราจะแก้ปัญหา ได้ง่ายขึ้น*******
เดิมใช้วิธีการเก็บ​ Log ว่าลูกค้าใช้ยังไง
