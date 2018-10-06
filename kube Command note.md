## Check pods
kubectl get pods -n production

## Show log
kubectl logs -f -n production prod-th-2stage-go-import-1509806176-bn8fr

## convert to base64
echo -n "senditdev" | base64

## How to apply
1. kubectl apply -n production -f [FILE_NAME]
2. delete pod ทิ้งเพื่อ restart และ แก้ env ใหม่

## How to delete pod
kubectl delete -n production [POD_NAME]

chart คือ แม่แบบ templte เหมือนกับพิมเขียว เมื่อ apply แล้ว k8s จะไป pull chart มาทำ

## check helm 
helm list 

## ต้องใช้ 2.7.2

## how to delete helm
helm delete

## ถ้า helm พัง ให้ไปดู chart กับ env value ที่ส่งเข้าไป
