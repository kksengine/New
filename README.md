# README 작성 방법

- 샾(#)을 앞에 붙이면 강조 하는것 처럼 나옴.
  예시: # 이렇게 하면 됨
  위와 같이 입력 하면 <이렇게 하면 됨> 이 부분이 폰트가 강조 되고 커짐

- README.md 파일은 최상단 위치에 둠

# 기술 스택

- Front
  -) HTML, CSS, JAVASCRIPT

- Back
  -) nest.js (Framework)

# 첫 번째

- 회원가입
  -) 요구 사항 1) 이름, 비밀번호

- 로그인
  -) 요구 사항 1) 이름, 비밀번호

# 두 번째

- 가게부 만들기
  -) 요구 사항 아직 미정

# git에 올리면 안 되는 파일 (**\***매우매우 중요**\***)

- # compiled output
  /dist
  /node_modules

\*\*node_modules

# Logs

logs
_.log
npm-debug.log_
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS

.DS_Store

# Tests

/coverage
/.nyc_output

# IDEs and editors

/.idea
.project
.classpath
.c9/
_.launch
.settings/
_.sublime-workspace

# IDE - VSCode

.vscode/\*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# env 환경파일

.env
