Windows / Mac
จะลง Docker Machine มาให้
จะช้าเพราะมันจะสร้าง Visual Linux ขึ้นมาเพื่อ Run docker

Linux
จะไม่ได้ลง Docker Machine มาให้
แต่จะไวเท่า Native

----------
### คำแนะนำ
- บน Production ควรจะใช้ Linux มันจะง่ายและเร็ว
- ห้ามเก็บ state ไว้ใน Docker > container ต้องเป็น stateless เท่านั้น เช่น ไฟล์ database ต้องเอาไว้ข้างนอก ห้ามไว้ใน Docker
- ต้องทำ Log

## Map Volume
- คือการเอา Directory ที่อยู่ใน Container มาชี้ใหม่ไปที่อื่นที่อยู่นอก Docker

## ควรทำทุกอย่างให้เป็น Script
- ทำ DockerFile คือขั้นตอนการทำงานใน Docker เช่น Install php config นี้ Load อันนี้
- ทำให้เราสามารถ Build ที่ไหนก็ได้ มันจะเหมือนเดิมเสมอ

### เป้าหมายวันนี้
- ทำ DockerFile ได้
- ทำอะไรกับ Registry ได้บ้าง (Version DockerFile)
- Run compose เป็น

-----

Service discovery
- Tools racher

### เริ่มจากทำ Docker File

docker run -ti {container_id} - ใช้ Run docker แบบเข้าไปข้างใน
docker run {container_id} - Start
docker images - เชค Images ในเครื่อง
docker ps -a - เชคว่ามีอะไร Run อยู่บ้าง
docker start {container_id} - Run Container ที่เคย Run มาแล้ว
docker attach - เข้าไปใน Container
docker rm - ลบ Container
docker rm ${docker ps -aq} - ลบ Container ทั้งหมด
docker rmi - ลบ Images

docker run -p 3000:3000 -v ${pwd}/var/source --entrypoint /bin/bash -ti {container_Id}
คือการ Run docker แล้วเข้าไปใน bash ของ Container

docker run -p 3000:3000 -ti {container_id}
docker run -p 3000:3000 -v ${pwd}/var/source --entrypoint /bin/bash -ti {container_Id}


### Docker compose
คือ ไฟล์ที่จะใช้ Run ทุก container
เริ่มจาก Build ก่อน ตั้งชื่อ แล้วค่อย Run ตาม Github


restart: always คือ มันจะ restart ทุกครั้งที่ container พัง ใส่เพื่อ บางครั้งเรา Run 2 container
- mysql
- api
มันเปิด 2 ตัว แต่ mysql ยัง run ไม่เสร็จแล้ว api ทำงานเสร็จก่อน เลยทำให้ api พัง จึงต้องใส่ restart ไว้เพื่อให้มันเปิดใหม่เรื่อยๆจนกว่า mysql จะใช้งานได้

## Orchestration tools
มีหลายตัว เอาไว้ช่วยทำงานกับ Docker เช่น
​- Kubernetes - https://kubernetes.io/
- Swarm