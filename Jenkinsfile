pipeline {
  agent any 
  stages {
    stage("build") {
      steps {
        echo 'Building the application... '
        echo 'Building the application... '
      }
    }
    stage("test") {
      steps {
        echo 'Testing the application... '
        echo 'Testing the application... '
      }
    }
    stage("deploy") {
      steps {
        echo 'Deploying the application...'
        echo 'Deploying the application...'
      }
    }
 
    stage('Email Notification'){
      steps {
        script{
          // currentBuild.result = 'SUCCESS'

          // if (currentBuild.resultIsBetterOrEqualTo('FAILURE')){
          //   currentBuild.result = 'FAILURE'
          // }
          // Send email notification 
          mail to: 'kankoffi36@gmail.com', 
               subject: "Jenkins Build Notification",
               body: "Pipeline: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n\n${BUILD_URL}"
        }
      }
    }
  }
}
