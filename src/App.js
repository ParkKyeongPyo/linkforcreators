import app from "./CSS/app.module.css";
import React, { useState } from "react";

import { Segmented } from "antd";
import "antd/dist/antd.css";

const SNS = [
  {
    url: "https://www.youtube.com/",
    name: "유튜브",
    img: "img/youtube.png",
  },
  {
    url: "https://www.instagram.com/",
    name: "인스타그램",
    img: "img/instargram.png",
  },
  {
    url: "https://www.facebook.com/",
    name: "페이스북",
    img: "img/Facebook.png",
  },
  {
    url: "https://www.tiktok.com/ko-KR/",
    name: "틱톡",
    img: "img/tiktok.png",
  },
  {
    url: "https://band.us/ko",
    name: "네이버 밴드",
    img: "img/band.jpg",
  },
  {
    url: "https://section.blog.naver.com/",
    name: "네이버 블로그",
    img: "img/blog.png",
  },
  {
    url: "https://section.cafe.naver.com/",
    name: "네이버 카페",
    img: "img/cafe.jpg",
  },
  {
    url: "https://twitter.com/",
    name: "트위터",
    img: "img/twitter.png",
  },
];

const SNSeng = [
  {
    url: "https://www.youtube.com/",
    name: "youtube",
    img: "img/youtube.png",
  },
  {
    url: "https://www.instagram.com/",
    name: "instargram",
    img: "img/instargram.png",
  },
  {
    url: "https://www.facebook.com/",
    name: "facebook",
    img: "img/Facebook.png",
  },
  {
    url: "https://www.tiktok.com/ko-KR/",
    name: "tiktok",
    img: "img/tiktok.png",
  },
  {
    url: "https://twitter.com/",
    name: "twitter",
    img: "img/twitter.png",
  },
]

const search = [
  {
    url: "https://www.google.co.kr/",
    name: "구글",
    img: "img/google.png",
  },
  {
    url: "https://www.naver.com/",
    name: "네이버",
    img: "img/naver.jpg",
  },
  {
    url: "https://www.daum.net/",
    name: "다음",
    img: "img/daum.png",
  },
  {
    url: "https://zum.com/",
    name: "줌",
    img: "img/zum.png",
  },
];

const searcheng = [
  {
    url: "https://www.google.co.kr/",
    name: "google",
    img: "img/google.png",
  },
  {
    url: "https://www.bing.com/",
    name: "Bing",
    img: "img/bing.png",
  },
  {
    url: "https://www.yahoo.com/",
    name: "yahoo",
    img: "img/yahoo.jpg",
  },
 
];

const contentCreate = [
  {
    url: "https://www.miricanvas.com/",
    name: "미리캔버스",
    img: "img/miricanvas.png",
  },
  {
    url: "https://www.canva.com/ko_kr/",
    name: "캔바",
    img: "img/canva.jpg",
  },
  {
    url: "https://pixlr.com/kr/",
    name: "픽슬러",
    img: "img/pixlr.png",
  },
  {
    url: "https://pablo.buffer.com/",
    name: "파블로",
    img: "img/pablo.jpg",
  },
  {
    url: "https://www.adobe.com/kr/express/",
    name: "어도비 익스프레스",
    img: "img/adobe.jpg",
  },
  {
    url: "https://desygner.com/",
    name: "데지그너",
    img: "img/desygner.png",
  },
  {
    url: "https://snappa.com/",
    name: "스내파",
    img: "img/snappa.jpg",
  },
];

const contentCreateeng = [
  {
    url: "https://www.canva.com/",
    name: "Canva",
    img: "img/canva.jpg",
  },
  {
    url: "https://pixlr.com/",
    name: "pixlr",
    img: "img/pixlr.png",
  },
  {
    url: "https://pablo.buffer.com/",
    name: "pablo",
    img: "img/pablo.jpg",
  },
  {
    url: "https://www.adobe.com/express/",
    name: "Adobe express",
    img: "img/adobe.jpg",
  },
  {
    url: "https://desygner.com/",
    name: "desygner",
    img: "img/desygner.png",
  },
  {
    url: "https://snappa.com/",
    name: "snappa",
    img: "img/snappa.jpg",
  },
];

const videoCreate = [
  {
    url: "https://www.gomlab.com/",
    name: "곰믹스",
    img: "img/gommix.png",
  },
  {
    url: "https://www.vapshion.com/",
    name: "뱁믹스",
    img: "img/vapmix.png",
  },
  {
    url: "https://www.blackmagicdesign.com/kr/products/davinciresolve",
    name: "다빈치 리졸브",
    img: "img/davinciresolve.png",
  },
  {
    url: "https://kr.cyberlink.com/",
    name: "파워디렉터",
    img: "img/power.png",
  },
  {
    url: "https://fxhome.com/product/hitfilm",
    name: "HitFilm",
    img: "img/hitfilm.jpg",
  },
  {
    url: "https://lwks.com/",
    name: "Lightworks",
    img: "img/lightworks.png",
  },
  {
    url: "https://shotcut.org/",
    name: "샷컷",
    img: "img/shotcut.png",
  },
  {
    url: "https://www.kinemaster.com/?lang=ko",
    name: "키네마스터",
    img: "img/kinemaster.png",
  },
];

const videoCreateeng = [
  {
    url: "https://fxhome.com/product/hitfilm",
    name: "HitFilm",
    img: "img/hitfilm.jpg",
  },
  {
    url: "https://lwks.com/",
    name: "Lightworks",
    img: "img/lightworks.png",
  },
  {
    url: "https://cyberlink.com/",
    name: "PowerDirector",
    img: "img/power.png",
  },
  {
    url: "https://shotcut.org/",
    name: "shotcut",
    img: "img/shotcut.png",
  },
  {
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    name: "Davinci Resolve18",
    img: "img/davinciresolve.png",
  },
  {
    url: "https://www.kinemaster.com/?lang=en",
    name: "kinemaster",
    img: "img/kinemaster.png",
  },
  {
    url: "https://www.gomlab.com/?language=eng",
    name: "gommix",
    img: "img/gommix.png",
  },
];

const freeImage = [
  {
    url: "https://pixabay.com/",
    name: "픽사베이",
    img: "img/pixabay.png",
  },
  {
    url: "https://www.pexels.com/ko-kr/",
    name: "펙셀스",
    img: "img/pexels.png",
  },
  {
    url: "https://unsplash.com/",
    name: "언스플래시",
    img: "img/unsplash.png",
  },
  {
    url: "https://pxhere.com/",
    name: "픽스히어",
    img: "img/pxhere.png",
  },
  {
    url: "https://morguefile.com/",
    name: "모그파일",
    img: "img/morgue.png",
  },
  {
    url: "https://gratisography.com/",
    name: "그래피소그래피",
    img: "img/gratisography.webp",
  },
  {
    url: "https://littlevisuals.co/",
    name: "리틀 비쥬얼",
    img: "img/littlevisuals.webp",
  },
];

const freeImageeng = [
  {
    url: "https://pixabay.com/",
    name: "pixabay",
    img: "img/pixabay.png",
  },
  {
    url: "https://www.pexels.com/",
    name: "pexels",
    img: "img/pexels.png",
  },
  {
    url: "https://unsplash.com/",
    name: "unsplash",
    img: "img/unsplash.png",
  },
  {
    url: "https://pxhere.com/",
    name: "pxhere",
    img: "img/pxhere.png",
  },
  {
    url: "https://morguefile.com/",
    name: "morguefile",
    img: "img/morgue.png",
  },
  {
    url: "https://gratisography.com/",
    name: "gratisography",
    img: "img/gratisography.webp",
  },
  {
    url: "https://littlevisuals.co/",
    name: "littlevisuals",
    img: "img/littlevisuals.webp",
  },
];

const freeVideo = [
  {
    url: "https://www.videvo.net/",
    name: "비디보",
    img: "img/videvo.png",
  },
  {
    url: "https://mixkit.co/",
    name: "믹스킷",
    img: "img/mixkit.png",
  },
  {
    url: "https://mazwai.com/",
    name: "마즈웨이",
    img: "img/mazwai.jpg",
  },
  {
    url: "https://www.splitshire.com/category/video/",
    name: "스플릿시어",
    img: "img/splitshire.png",
  },
  {
    url: "https://www.storyblocks.com/",
    name: "스토리블록스",
    img: "img/storyblocks.png",
  },
  {
    url: "https://pixabay.com/",
    name: "픽사베이",
    img: "img/pixabay.png",
  },
  {
    url: "https://www.pexels.com/ko-kr/",
    name: "펙셀스",
    img: "img/pexels.png",
  },
];

const freeVideoeng = [
  {
    url: "https://www.videvo.net/",
    name: "videvo",
    img: "img/videvo.png",
  },
  {
    url: "https://mixkit.co/",
    name: "mixkit",
    img: "img/mixkit.png",
  },
  {
    url: "https://mazwai.com/",
    name: "mazwai",
    img: "img/mazwai.jpg",
  },
  {
    url: "https://www.splitshire.com/category/video/",
    name: "splitshire",
    img: "img/splitshire.png",
  },
  {
    url: "https://www.storyblocks.com/",
    name: "storyblocks",
    img: "img/storyblocks.png",
  },
  {
    url: "https://pixabay.com/",
    name: "pixabay",
    img: "img/pixabay.png",
  },
  {
    url: "https://www.pexels.com/",
    name: "pexels",
    img: "img/pexels.png",
  },
];

const keywordAnalyze = [
  {
    url: "https://some.co.kr/",
    name: "썸트렌드",
    img: "img/sometrend.png",
  },
  {
    url: "https://ads.google.com/intl/ko_kr/getstarted/?subid=kr-ko-ha-aw-bk-a-m00!o3~Cj0KCQjw39uYBhCLARIsAD_SzMT3Swwhdhjb6VKsJYPJQC9Ims2wM_zm3OcrGicbmqLQNrCwYn23fF4aArLREALw_wcB~81876026093~kwd-324689985256~7918679677~434634269425&gclid=Cj0KCQjw39uYBhCLARIsAD_SzMT3Swwhdhjb6VKsJYPJQC9Ims2wM_zm3OcrGicbmqLQNrCwYn23fF4aArLREALw_wcB&gclsrc=aw.ds",
    name: "구글 키워드 플래너",
    img: "img/google.png",
  },
  {
    url: "https://trends.google.co.kr/trends/?geo=KR",
    name: "구글 트렌드",
    img: "img/google.png",
  },
  {
    url: "https://kwfinder.com/",
    name: "키워드 파인더",
    img: "img/kwfinder.jpeg",
  },
  {
    url: "https://datalab.naver.com/",
    name: "네이버 데이터랩",
    img: "img/naver.jpg",
  },
  {
    url: "https://blackkiwi.net/",
    name: "블랙키위",
    img: "img/blackkiwi.png",
  },
  {
    url: "https://whereispost.com/",
    name: "웨어 이즈 포스트",
    img: "img/logo192.png",
  },
];

const keywordAnalyzeeng = [
  {
    url: "https://ads.google.com/intl/ko_kr/getstarted/?subid=kr-ko-ha-aw-bk-a-m00!o3~Cj0KCQjw39uYBhCLARIsAD_SzMT3Swwhdhjb6VKsJYPJQC9Ims2wM_zm3OcrGicbmqLQNrCwYn23fF4aArLREALw_wcB~81876026093~kwd-324689985256~7918679677~434634269425&gclid=Cj0KCQjw39uYBhCLARIsAD_SzMT3Swwhdhjb6VKsJYPJQC9Ims2wM_zm3OcrGicbmqLQNrCwYn23fF4aArLREALw_wcB&gclsrc=aw.ds",
    name: "Google keyword planner",
    img: "img/google.png",
  },
  {
    url: "https://trends.google.co.kr/trends/?geo=KR",
    name: "Google trend",
    img: "img/google.png",
  },
  {
    url: "https://kwfinder.com/",
    name: "KWFinder",
    img: "img/kwfinder.jpeg",
  },
  {
    url: "https://sitechecker.pro/rank-checker/",
    name: "Sitechecker",
    img: "img/sitechecker.png",
  },
  {
    url: "https://seranking.com/",
    name: "SE Ranking",
    img: "img/seranking.webp",
  },
  {
    url: "https://serpstat.com/",
    name: "SERPSTAT",
    img: "img/serpstat.png",
  },
  {
    url: "https://www.seobility.net/en/",
    name: "seobility",
    img: "img/seobility.webp",
  },
  {
    url: "https://serpwatcher.com/",
    name: "SERPWatcher",
    img: "img/serpwatcher.png",
  },
];

const website = [
  {
    url: "https://ko.wix.com/",
    name: "윅스",
    img: "img/wix.png",
  },
  {
    url: "https://wordpress.com/ko/",
    name: "워드프레스",
    img: "img/wordpress.png",
  },
  {
    url: "https://www.modoo.at/",
    name: "네이버 모두",
    img: "img/naver.jpg",
  },
  {
    url: "https://www.creatorlink.net/",
    name: "크리에이터 링크",
    img: "img/creatorlink.jpg",
  },
  {
    url: "https://www.quv.kr/",
    name: "큐브",
    img: "img/quv.png",
  },
  {
    url: "https://imweb.me/",
    name: "아임웹",
    img: "img/imweb.webp",
  },
];

const websiteeng = [
  {
    url: "https://ko.wix.com/",
    name: "wix",
    img: "img/wix.png",
  },
  {
    url: "https://wordpress.com/",
    name: "wordpress",
    img: "img/wordpress.png",
  },
  {
    url: "https://www.creatorlink.net/en",
    name: "creatorlink",
    img: "img/creatorlink.jpg",
  },
  {
    url: "https://www.hubspot.com/",
    name: "hubspot",
    img: "img/hubspot.jpg",
  },
  {
    url: "https://www.weebly.com/?lang=en",
    name: "Weebly",
    img: "img/weebly.jpg",
  },
  {
    url: "https://elementor.com/",
    name: "elementor",
    img: "img/elementor.webp",
  },
  {
    url: "https://us.webnode.com/",
    name: "webnode",
    img: "img/webnode.jpeg",
  },
  {
    url: "https://www.jimdo.com/",
    name: "JIMDO",
    img: "img/jimdo.webp",
  },
  {
    url: "https://www.mozello.com/",
    name: "mozello",
    img: "img/mozello.svg",
  },
  {
    url: "https://www.webstarts.com/",
    name: "webstarts",
    img: "img/webstarts.png",
  },
];

const landing = [
  {
    url: "https://litt.ly/",
    name: "리틀리",
    img: "img/littly.png",
  },
  {
    url: "https://unttd.cc/",
    name: "언티티디",
    img: "img/unttd.png",
  },
  {
    url: "https://linktr.ee/",
    name: "링크트리",
    img: "img/linktree.png",
  },
  {
    url: "https://link.inpock.co.kr/",
    name: "인포크링크",
    img: "img/inpocklink.png",
  },
  {
    url: "https://make.link/",
    name: "메이크링크",
    img: "img/makelink.png",
  },
  {
    url: "https://prfl.link/",
    name: "프로필링크",
    img: "img/profilelink.png",
  },
  {
    url: "https://linkon.id/",
    name: "링크온",
    img: "img/linkon.png",
  },
  {
    url: "https://instabio.cc/ko",
    name: "인스타 파이오",
    img: "img/instabio.png",
  },
  {
    url: "https://firelink.id/",
    name: "파이어링크",
    img: "img/firelink.png",
  },
];

const landingeng = [
  {
    url: "https://linktr.ee/",
    name: "Linktree",
    img: "img/linktree.png",
  },
  {
    url: "https://link.inpock.co.kr/en",
    name: "InpockLink",
    img: "img/inpocklink.png",
  },
  {
    url: "https://instabio.cc/eng",
    name: "Insta Bio",
    img: "img/instabio.png",
  },
  {
    url: "https://firelink.id/",
    name: "Firelink",
    img: "img/firelink.png",
  },
  {
    url: "https://unttd.cc/",
    name: "unttd",
    img: "img/unttd.png",
  },
  {
    url: "https://linkon.id/",
    name: "Linkon",
    img: "img/linkon.png",
  },
];

const siteRegister = [
  {
    url: "https://search.google.com/",
    name: "구글 서치 콘솔",
    img: "img/google.png",
  },
  {
    url: "https://searchadvisor.naver.com/",
    name: "네이버 서치 어드바이저",
    img: "img/naver.jpg",
  },
  {
    url: "https://register.search.daum.net/index.daum",
    name: "다음 검색 등록",
    img: "img/daum.png",
  },
  {
    url: "https://help.zum.com/submit/register",
    name: "줌 사이트 검색 등록",
    img: "img/zum.png",
  },
];

const siteRegistereng = [
  {
    url: "https://search.google.com/",
    name: "Google search console",
    img: "img/google.png",
  },
  {
    url: "https://www.bing.com/webmasters/about",
    name: "Bing Webmaster Tools",
    img: "img/bing.png",
  },
];

const etc = [
  {
    url: "https://www.patent.go.kr/smart/portal/Main.do",
    name: "상표/상호 등록",
    img: "img/korea.png",
  },
  {
    url: "https://www.hometax.go.kr/",
    name: "사업자 등록증 발급",
    img: "img/korea.png",
  },
];

const etceng = [

];

function App() {
  const [value, setValue] = useState("플랫폼");
  const [eng, setEng] = useState("platform")
  const [language, setLanguage] = useState("한국어");

  return (
    <div className={app.app}>
      <div className={app.header}>
        <div>Link for all Creators</div>
      </div>
      <div className={app.frame}>
        <div className={app.content}>
          <div className={app.segment1}>
            <Segmented
              options={["한국어", "English"]}
              value={language}
              size="large"
              onChange={setLanguage}
            />
          </div>
          {language === "한국어" && (
            <>
              <div className={app.segment2}>
                <Segmented
                  options={[
                    "플랫폼",
                    "콘텐츠",
                    "자료",
                    "키워드",
                    "웹사이트",
                    "등록",
                    "etc",
                  ]}
                  value={value}
                  size="large"
                  onChange={setValue}
                />
              </div>

              {value === "플랫폼" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>SNS</div>
                      {SNS.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>검색엔진</div>
                      {search.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {value === "콘텐츠" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>무료 이미지 편집/제작</div>
                      {contentCreate.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>무료 영상 편집/제작</div>
                      {videoCreate.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {value === "자료" && (
                <div className={app.segFrame}>
                  <div style={{ marginBottom: "10px" }}>
                    *정확한 저작권과 라이선스 정보는 각 사이트에서 확인하시길
                    바랍니다.
                  </div>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>무료 이미지</div>
                      {freeImage.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>무료 영상</div>
                      {freeVideo.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {value === "키워드" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>키워드 분석</div>
                      {keywordAnalyze.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {value === "웹사이트" && (
                <div className={app.segFrame}>
                  <div style={{ marginBottom: "10px" }}>
                    *서비스별 부분 유료 여부는 각 사이트에서 확인하시길
                    바랍니다.
                  </div>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>무료 웹사이트 제작</div>
                      {website.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>
                        무료 올인원 프로필 링크 웹사이트
                      </div>
                      {landing.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {value === "등록" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>
                        웹사이트 검색엔진 등록
                      </div>
                      {siteRegister.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {value === "etc" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>etc</div>
                      {etc.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {language === "English" && (
            <>
              <div className={app.segment2}>
                <Segmented
                  options={[
                    "platform",
                    "content",
                    "source",
                    "keyword",
                    "website",
                    "register",
                    "etc",
                  ]}
                  value={eng}
                  size="large"
                  onChange={setEng}
                />
              </div>

              {eng === "platform" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>SNS</div>
                      {SNSeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>Search Engine</div>
                      {searcheng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {eng === "content" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>Free image editor</div>
                      {contentCreateeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>Free video editor</div>
                      {videoCreateeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {eng === "source" && (
                <div className={app.segFrame}>
                  <div style={{ marginBottom: "10px" }}>
                    *Check each website for accurate copyright and license information
                  </div>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>Free image</div>
                      {freeImageeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>Free video</div>
                      {freeVideoeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {eng === "keyword" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>Keyword analyzer</div>
                      {keywordAnalyzeeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {eng === "website" && (
                <div className={app.segFrame}>
                  <div style={{ marginBottom: "10px" }}>
                    *Check each website for parital fee
                  </div>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>Free website Creation</div>
                      {websiteeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>
                        Free all-in-one profile link website
                      </div>
                      {landingeng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {eng === "register" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>
                        Website register in Search engine
                      </div>
                      {siteRegistereng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {eng === "etc" && (
                <div className={app.segFrame}>
                  <div className={app.segRow}>
                    <div className={app.segBox}>
                      <div className={app.segHeader}>etc</div>
                      {etceng.map((item) => (
                        <div className={app.map}>
                          <img className={app.img} src={item.img} />
                          <div className={app.name}>{item.name}</div>
                          <a
                            className={app.url}
                            href={item.url}
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className={app.footer}>
        <div>Copyright © 2022.09. linkCreators All rights reserved.</div>
        <div>contact - as8798as@gmail.com</div>
      </div>
    </div>
  );
}

export default App;
