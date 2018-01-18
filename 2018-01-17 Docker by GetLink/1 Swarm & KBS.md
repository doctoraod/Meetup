## Highlight from DockerCON17
Kubernetes เข้ามาเป็นส่วนหนึ่งของ Stack Docker แล้ว
ใครอยากใช้ swarm ใช้ หรือ Kubernetes ก็ได้

Production Docker
- Docker Trusted Registry (DTR)

### Docker EE (Enterprise Edition)
Swarm กับ Kubernetes สามารถอยู่ในฟามเดิม เครื่องเดียวกันได้เลย
โดยที่ไม่ต้องเลือกข้าง

#### Docker Native/Swarm Mode:
- Simplify ทำให้มันง่าย
- มี Overlay network ให้ใช้งานเลย
- ทำให้ง่ายใช้งานง่าย

#### K8S (Kubernetes)
- เป็น Production grade orchestrator ใช้ในระดับ Production
- ต้อง Custom ทุกอย่างทั้ง Network Storage
- ซึ่งยาก แต่พร้อมใช้งาน
- Learning curve สูงกว่า
- เกิดจาก Google แต่ปัจจุบันเป็นของ clud native
- Check health
- กระจาย Load
- แนะนำให้ใช้ YMAL file
- HPA (Horizontal Pods Scaling) base on CPU

##### Pods
- เล็กสุดของ K8S
- มีความหมายมากกว่าหรือเท่ากับ Container
- ใน Pods อาจบรรจุ Container มากกว่าหนึ่งตัวก็ได้
- Container บางตัวทำงานในหน่วยเล็กมากๆ
- เช่น Apache Tomcat ก็สร้าง Apache อันนึง Tomcat อันนึงแล้วเอามาอยู่ใน Pods เดียวกัน

#### Docker community Edition
- แถม Kubernetes มาด้วยใน Edge version
- มีหน้า UI ให้ใช้

## Borg
- Load balancer

17.12.0 CE Edge

github.com/praparn/docker_meetup_20189011


------
Speaker : Tomz
เราจะ Deploy ยังไงให้ปลอดภัย

Continuous Delivery - คือ พร้อมสำหรับการ Run production คืองานของ Dev จบแล้ว
Continuous Deployment - คือ Production ready พร้อมใช้งาน

## Blue/Green deployments
คือ ถ้ามี Serivce ตัวหนึ่ง Run อยู่แล้วทำงานได้ดี
เราจะเอา Service ใหม่เอาไป Run ข้างๆด้วย Data ชุดเดียวกัน
Test ตัวนั้นให้มันดีและค่อยๆปล่อย Traffic เข้าไปตั้งแต่ 1-10%

แต่ละ Service จะมี Blue/Green ของมัน
เรียกตัวที่ Run อยู่ว่า Blue
ตัวที่กำลังจะ Run ว่า Green

Spinnaker ช่วย Control การปล่อย Traffic เป็น Tool ช่วยทำ Blue/Green