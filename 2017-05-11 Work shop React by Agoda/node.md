# Work Shop React

Speaker : Roland Flanagan (Agoda)
19:00
เริ่มต้นด้วยอธิบายสิ่งต่างๆใน Agoda และเลือก React ได้ยังไง

19:15
Components and Virtual DOM / JSX

Presentational (aka stateless) Component
Container (aka stateful) Component

### ประโยชของ Container Presentational Pattern
- Better separation of converns
- Better reusability
- React 0.15 Performance

### CSS Global Scoping Problem
- CSS selectors exit within the same global scope
- คุณต้องกังวลทุกครั้งที่เขียน CSS ว่าจะกระทบส่วนรวมรึเปล่า

### CSS Modules
- ใน React จะทำการสร้าง Key ให้ CSS จะทำให้ไม่ทะเลาะกับส่วนรวม

### Testing with Enzyme
- ทดสอบได้ง่าย

### Redux
- Flux
- Single Store

### ต่อจากนี้อธิบาย Code
```
git clone https://github.com/flanamacca/todo-demo.git
yarn
npm run dev
```


