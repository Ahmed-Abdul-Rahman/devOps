pipeline {
    agent any

    parameters {
        booleanParam(name: 'DEPLOY_PROD', defaultValue: false, description: 'Deploy to production?')
    }

    environment {
        NODE_ENV = 'development'
        STAGING_PORT = '4000'
        PRODUCTION_PORT = '5000'
    }

    tools {
        nodejs 'NodeJS 18' // Make sure to configure this in Jenkins Global Tools
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code...'
                git branch: 'main', url: 'https://github.com/Ahmed-Abdul-Rahman/devOps.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm run test'
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to staging...'
                sh 'PORT=$STAGING_PORT node dist/index.js &'
            }
        }

        stage('Deploy to Production') {
            when {
                expression { params.DEPLOY_PROD == true }
            }
            steps {
                echo "Deploying to Production..."
                sh './deploy-prod.sh' // script to deploy app to production 
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
            mail to: 'admin@example.com',
                 subject: "🚨 Jenkins Pipeline Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build failed. Check Jenkins console output for details.\n\n${env.BUILD_URL}"
        }
    }
}
