# Share Recipe

## 소개
레시피를 공유하고 관리하는 웹 애플리케이션입니다.  
Vue 2 기반 프론트엔드와 NestJS 기반 백엔드가 연동되어 동작합니다.

## 주요 기능
- 사용자 인증 및 권한 관리  
- 이미지 업로드 및 관리  
- 레시피 정보 CRUD  
- 페이징 API를 통한 레시피 목록 조회  
- 검색 API를 통한 레시피 목록 조회
- 댓글 기능 구현

## 기술 스택
- Frontend: Vue 2, Vuex, Axios  
- Backend: NestJS, TypeORM, MySQL

## 데모
- 회원가입 및 로그인   
  https://github.com/user-attachments/assets/b31c637b-7a5b-4fcf-9003-17f8baadd3c2
- 레시피 등록   
  https://github.com/user-attachments/assets/543719ea-a0cb-4375-9f8d-2cb6dddcee71
- 검색 및 상세페이지   
  https://github.com/user-attachments/assets/c8299e9e-19f3-438a-a03e-7cc87a786a60
- 댓글 등록 및 수정   
  https://github.com/user-attachments/assets/7edb6eed-a73b-43fe-97b1-281d680688e8



## 설치 및 실행 방법
### 백엔드 실행
```bash
cd backend
npm run start:dev
```

### 프론트엔드 실행
```bash
cd frontend
npm run serve
