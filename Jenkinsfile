pipeline {
  agent any
  stages {
    stage('Check for vulnerabilities') {
      steps {
        sh 'npm audit --parseable --production || exit 0'
      }
    }

    stage('download dependencies') {
      steps {
        sh 'npm ci'
        sh 'npm outdated || exit 0'
      }
    }

    stage('Check linting') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Check unit:test') {
      steps {
        sh 'npm run test:unit -- --ci --coverage'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
