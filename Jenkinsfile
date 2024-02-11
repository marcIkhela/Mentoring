pipeline {
  agent any 

  // options {
  //   buildDiscarder(logRotator(numToKeepStr: '5')) // 
  // }
  stages{
   stage("verify tooling") {
      steps {
        sh '''
          docker -v
          docker compose version 
          docker-compose -v
          curl --version
          jq --version
        '''
      }
   }
    

  // environment{
  //   DOKCER_HUB_CREDENTIALS = credentials('mentoring-dockerhub')
  // }
  // stages {
  //   stage("build") {  
  //     steps {
  //       // script{
  //           // Étape de construction de l'image avec docker-compose
  //           sh 'docker-compose -f docker-compose.yml build'
  //       // }
  //     }
  //   }
  //   stage('login Docker hub') {
  //   steps {
  //       // script {
  //         // Connexion à Docker Hub
  //         withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
  //           sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
  //       }
  //     // }
  //   }
  //   }
  // stage('tag docker image '){
  //   steps{
  //     // script{
  //       // Tag des images
  //       sh 'docker tag api-next:latest ikhela/mentoring:api-next'
  //       sh 'docker tag api-nest:latest ikhela/mentoring:api-nest'
  //     // }
  //   }
  // }
  // stage('push docker image '){
  //   steps{
  //     // script{
  //       // Pousser les images taggées vers Docker Hub
  //       sh 'docker push ikhela/mentoring:api-next'
  //       sh 'docker push ikhela/mentoring:api-nest'
  //     // }
  //   }
  // }

  //   stage('Clean') {
  //     steps {
  //         // script{
  //           // Arrêter et supprimer les conteneurs liés à docker-compose
  //           /* groovylint-disable-next-line Indentation */
  //           sh 'docker-compose -f docker-compose.yml down --volumes --remove-orphans'

  //           // Supprimer les images locales non utilisées
  //           sh 'docker image prune -f'

  //           sh "docker logout"
  //         // }
  //      }
  //   }
   
 
  //   stage('Email Notification'){
  //     steps {
  //       script{
  //         // Send email notification 
  //         mail to: 'kankoffi36@gmail.com', 
  //              subject: "Jenkins Build Notification",
  //              body: "Pipeline: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n\n${BUILD_URL}\n\n Succes build and push image"
  //       }
  //     }
  //   }

  // logout to docker after 
  //   post {
  //     always {
  //       sh "docker logout"
  //   }
  // }
  }
}
