เรื่อง Higher-order
- recompose คือ lib ที่จัดการ component

ปัญหา function duplicate บางอย่าง เช่น จำนวนสินค้า กับ subtotal ซึ่งมี loop เหมือนกัน แค่มี คำนวนต่างกันนิดหน่อย
ซึ่ง react มีปัญหานี้เหมือนกันคือ จะเขียน Component ที่มีการทำงานคล้ายๆกันหลายๆอัน หรือจะเขียน Component ที่แก้แล้วอันเดียว

[Composition]
- ดูของที่เหมือนกัน และแยกสิ่งที่ต่างกันออกมา ตรวจสอบดู code ที่ duplicate

Higher-order คือ function ที่เรียก function อีกทีนึง

-------
หลักการของ Higher-order ใช้กับ React component ได้
โดย React-
