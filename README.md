
# About Mypics
Mypics is a simple React JS application using an Unsplash API to pull images based on the user's search term.

My objective is to use the app to build a simple docker image and run it with minikube on a local environment and on AWS with Kubernetes (KOPS and EKS) in the context of tutorial setup.

## Sources
- Folder src contains the JS files
- Build the image using the Dockerfile 
- File webapp.yaml for building a local minikube cluster
- File webapp-aws for setting Kubernetes environment on AWS to run mypics
<br>

## Kops Method
- Setup a small EC2 (e.g. t2.micro) as  boostrap host to run all the setup commands
- Install kops cli, kubectl on the bootstrap host, setup up AWS resources and create the cluster following instructions here: https://github.com/kubernetes/kops and https://kops.sigs.k8s.io/getting_started/aws/ 
- When a cluster is up, copy the webapp-aws.yaml to the boostrap and apply it using the kubectl tool.
- If the deployment and service created successfully, use the AWS ELB DNS link to access the Mypics.

Application running on AWS with Kubernetes setup with kops with route 53 hostzone alias record created for the ELB:

![](C:\git\mypics\images\dolphins.png)

<br>

- **Use kops to DELETE the cluster to stop AWS charging**
- The setup is for my personal tutorial use only.
