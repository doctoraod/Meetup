ห้อง Advance
14:00 ห้อง 415 Webpack
NodeJS อ่านไฟล์และแปลงเป็น javascript

Webpack Plugins
0. Webpack Basic

[กำหนด Entry]
- output folder (dist)
- source code folder (src)
- entry file (src/entry.js)
เริ่มต้นจากกำหนด entry ก่อนและกำหนด output
**ควร install webpack แบบ local เพราะแต่คนละอาจจะใช้เวอร์ชันไม่เหมือนกัน***

[กำหนด loader]
- babel-loader
- style-loader
- css-loader
- ฯลฯ

webpack จะทำการแปลง ไฟล์ทั้งหมดให้กลายเป็น js เช่น รวมไฟล์ js,sass ฯลฯ ทั้งหมดให้กลายเป็น bundle.js

[วันที่เรามีโปรเจคใหญ่ขึ้น]
เวลามีไฟล์เยาะๆทุกอย่างมันกระจาย แก้โดยแยก เป็น component ไปเลย เช่น Label ก็แยกไปเลยไม่ต้องรวมกับส่วนอื่น

**loader ช่วยในเรื่อง auto-prefix ได้ด้วย

[แก้ปัญหา livereload เช่น พิมพ์ฟอร์มไป 4-5 อัน แล้วเขียนใหม่]
webpack ต่างจาก livereload คือ จะ update เฉพาะ Component

[Plugin] คืออะไรก็ได้ที่ไม่ใช่ loader


Provide Plugin  ช่วยให้ไม่่ import ทุกไฟล์
webpack-dashboard ใช้ช่วย build ให้ดูดีขึ้น

**loader ทำงานจาก ขวา -> ซ้าย**
------------------------จบ basic------------------------
ปัญหา build แล้วจะ debug ยังไง?
- การกำหนด source-map ช่วยให้ debug ไฟล์ bundle.js ได้ง่ายขึ้น
ปัญหาการ import (../../compoent/file.jsx)
- แก้ด้วยการ resolve - moduleDirectory

[แยก build-dev กับ build-production]

**ถ้าไฟล์ใหญ๋ให้กำหนด limit ในการแปลงเช่นไฟล์รูป**

[Webpack split code]
ปัญหา bundle.js ไฟล์ใหญ่มาก แม้จะย่อมาแล้วก็ตาม
- ใช้ Slitting code ให้โหลดเฉพาะไฟล์ที่ใช้เท่านั้น
- แบ่งแล้วเรียกว่าเป็น Chunk

[การแก้การ build นาน]
- prefetch จะทำให้มันหาไฟล์ได้เร็วขึ้น
- commom chunk

[ไฟล์ build]
- แบ่ง vendor.bundle.js กับ bundle.js ออกจากกัน ช่วยให้ build เร็วขึ้น
vendor คือไฟล์ที่ npm install ออกมามันจะไม่ค่อยเปลี่ยนเท่าไหร่ทำให้ไม่ต้อง build บ่อย

[Slitting Vendor]
- CommonsChunkPlugin -> vendor

[ทำ Caching]
- ช่วยให้จำครั้งแรก แก้เรื่องการ load ใหม่ จะได้ไวขึ้น
จะเจอปัญหาแก้ไฟล์แล้วไม่เรียกของใหม่
- แก้ด้วยกันใส่ version หรือ hash  ต่อท้ายชื่อไฟล์ไป เช่นมันจะเป็น bundle.72a7dkajsdlfkj092.js
