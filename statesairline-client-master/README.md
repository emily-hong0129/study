# im-sprint-statesairline-client

.
├── README.md 
├── __tests__
│   └── index.test.js # 테스트 파일
├── api
│   └── FlightDataApi.js # 항공편 정보를 받아오는 API
├── package.json
├── pages
│   ├── Main.js # 첫화면 컴포넌트, 필터링 상태를 담고 있습니다.
│   ├── component
│         ├── Debug.js            # 디버그용 컴포넌트 (테스트 통과에 필요합니다)
│         ├── Flight.js           # 단일 항공편
│         ├── FlightList.js       # 항공편 목록 
│         ├── LoadingIndicator.js # 로딩 컴포넌트
│         └── Search.js           # 검색 도구 컴포넌트, 필터링 상태를 변경합니다.
├── public
├── resource
│   └── flightList.js # 하드코딩된 항공편 정보
└── styles
    └── globals.css # 스타일 시트