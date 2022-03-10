# 👨‍💻dir(Developer Items Recommend)
개발자를 위한 아이템 추천 사이트
<br/>
<br/>


## 프로젝트 소개
개발자를 위한 아이템을 추천하고, 후기를 남기면서 개발자들 간 유용한 아이템을 공유할 수 있습니다.
<br/>
<br/>

## 👨‍👨‍👧‍👦역할
|역할|팀원|
|--|--|
|메인페이지 구성|[문현상](https://github.com/bigtyno931128)|  
|상품 등록 구성| [변기원](https://github.com/bkw9603)|  
|상세페이지/후기등록|[김지호](https://github.com/Zoe-Jiho-Kim)|  
|회원가입/로그인|[황다빈](https://github.com/chIorophyII)|  
<br/>
<br/>


## 📆프로젝트 기간
2022.03.07 ~ 2022.03.10 (총 4일)  
<br/>
<br/>
  
## ⚙️주요 기능
- 메인페이지
![메인이미지](/static/assets/img/main.png)
- 기본 기능
> 각 카테고리(노트북, 모니터, 마우스, 키보드, 기타)를 클릭하면, 해당 카테고리에 대해 다른 회원들의 추천 상품을 볼 수 있습니다.  
> 특정 상품을 선택하면 상품에 대한 상세정보(이름, 사진, 추천인, 가격, 추천이유)를 볼 수 있습니다.  

![상품이미지](/static/assets/img/items.png)

- 회원가입/로그인/로그아웃
> 로그인/회원가입 버튼을 눌러 회원이 아니라면 회원가입을 하고, 회원이라면 로그인을 할 수 있습니다.  
> 로그인을 하게 되면, 추천상품을 등록하거나, 다른 회원이 등록한 상품에 대해 댓글을 달 수 있습니다.  
> 본인이 올린 게시글에 대해서는 삭제할 수 있습니다.  
> 로그아웃을 할 수 있습니다.
![](/static/assets/img/register.png)
<br/>
<br/>

## 📑API
|기능|Method|url|Request|Response|
|------|---|---|---|---|
|로그인, 회원가입|POST|/login||JWT token|
|카테고리|GET|/||전체 카테고리|
||GET|/keyword||token, 아이템 리스트|
<br/>
<br/>

## 🛠️기술 스택
- View: HTML5, CSS3, Javascript 
- Framework: Flask(2.0.3)
- Database: MongoDB
- Server: AWS EC2
- etc: JWT(1.7.1), jQuery, jinja2(3.0.3)
