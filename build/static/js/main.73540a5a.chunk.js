(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{297:function(e,t,a){e.exports=a(574)},314:function(e,t,a){},574:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(24),c=a(290),s=a(34),u=a(292),m=a(36),d=a(4),p=a(270),h=a(272),f=a(54),g=a(273),y={filters:{__typename:"filters",gender:[],followersCount:[],categories:[],languages:[],countries:[],cities:[],creatorsSize:[]},userData:{__typename:"userData",id:"",name:"",email:"",role:""},brandSearchTerm:null},v=a(33),b=a(18),E=a(19),w=a.n(E);function k(){var e=Object(b.a)(["\n\t\tquery getGenderList {\n\t\t\tfilters @client {\n\t\t\t\tgender\n\t\t\t}\n\t\t}\n\t"]);return k=function(){return e},e}function O(){var e=Object(b.a)(["\n\t\tquery getCountriesist {\n\t\t\tfilters @client {\n\t\t\t\tcountries\n\t\t\t}\n\t\t}\n\t"]);return O=function(){return e},e}function j(){var e=Object(b.a)(["\n\t\tquery getUserData {\n\t\t\tuserData @client {\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t"]);return j=function(){return e},e}function S(){var e=Object(b.a)(["\n\t\tquery getFollowers {\n\t\t\tfilters @client {\n\t\t\t\tfollowersCount\n\t\t\t}\n\t\t}\n\t"]);return S=function(){return e},e}function T(){var e=Object(b.a)(["\n\t\tquery getLanguageList {\n\t\t\tfilters @client {\n\t\t\t\tlanguages\n\t\t\t}\n\t\t}\n\t"]);return T=function(){return e},e}function x(){var e=Object(b.a)(["\n\t\tquery getCategoriesList {\n\t\t\tfilters @client {\n\t\t\t\tcategories\n\t\t\t}\n\t\t}\n\t"]);return x=function(){return e},e}function C(){var e=Object(b.a)(["\n\t\tquery getCreatorsSizeList {\n\t\t\tfilters @client {\n\t\t\t\tcreatorsSize\n\t\t\t}\n\t\t}\n\t"]);return C=function(){return e},e}function N(){var e=Object(b.a)(["\n\t\tquery getSearchTerm {\n\t\t\tsearchTerm @client \n\t\t}\n\t"]);return N=function(){return e},e}function q(){var e=Object(b.a)(["\n        query getErrorModalStatus {\n            status @client\n        }\n    "]);return q=function(){return e},e}var I={Mutation:{updateSelectedGender:function(e,t,a){var n=t.list,r=(a.cache,w()(k())),o=ae.readQuery({query:r}),i={filters:Object(v.a)({},o.filters,{gender:n})};return setTimeout(function(){ae.writeData({query:r,data:i})},0),null},updateSelectedCountries:function(e,t,a){var n=t.list,r=(a.cache,w()(O())),o=ae.readQuery({query:r}),i={filters:Object(v.a)({},o.filters,{countries:n})};return setTimeout(function(){ae.writeData({query:r,data:i})},0),null},updateFolllowersFilter:function(e,t,a){var n=t.list,r=(a.cache,w()(S())),o=ae.readQuery({query:r}),i={filters:Object(v.a)({},o.filters,{followersCount:n})};return setTimeout(function(){ae.writeData({query:r,data:i})},0),null},setUserData:function(e,t,a){var n=t.name,r=t.id,o=t.email,i=(a.cache,w()(j())),l=ae.readQuery({query:i}),c={userData:Object(v.a)({},l.userData,{name:n,id:r,email:o})};return console.log("data",c),ae.writeData({query:i,data:c}),null},updateSelectedLanguages:function(e,t,a){var n=t.list,r=(a.cache,w()(T())),o=ae.readQuery({query:r}),i={filters:Object(v.a)({},o.filters,{languages:n})};return setTimeout(function(){ae.writeData({query:r,data:i})},0),null},updateSelectedCategories:function(e,t,a){var n=t.list,r=(a.cache,w()(x())),o=ae.readQuery({query:r}),i={filters:Object(v.a)({},o.filters,{categories:n})};return setTimeout(function(){ae.writeData({query:r,data:i})},0),null},updateSelectedCreatorsSize:function(e,t,a){var n=t.list,r=(a.cache,w()(C())),o=ae.readQuery({query:r}),i={filters:Object(v.a)({},o.filters,{creatorsSize:n})};return setTimeout(function(){ae.writeData({query:r,data:i})},0),null},setSearchTerm:function(e,t,a){a.cache;var n=w()(N()),r={searchTerm:t.searchTerm};return ae.writeData({query:n,data:r}),null},setErrorModalStatus:function(e,t,a){a.cache;var n=w()(q()),r={status:t.status};return ae.writeData({query:n,data:r}),null}}};function P(){var e=Object(b.a)(["\n\tmutation contactForm($email: String!, $message: String!) {\n\t\tcontactForm(email: $email, message: $message)\n\t}\n"]);return P=function(){return e},e}function A(){var e=Object(b.a)(["\n    mutation visitorSubscription($email: String!, $brand: String!) {\n        visitorSubscription(email: $email, brand: $brand)\n    }\n"]);return A=function(){return e},e}function D(){var e=Object(b.a)(["\n    query errorModalStatus {\n        status @client\n    }\n"]);return D=function(){return e},e}function L(){var e=Object(b.a)(["\n    mutation setErrorModalStatus($status: Boolean!) {\n        setErrorModalStatus(status: $status) @client\n    }\n"]);return L=function(){return e},e}function R(){var e=Object(b.a)(["\n    query brandAppearanceQuery($searchTerm: String!, $first: Int!, $skip: Int!) {\n        brandAppearance(searchTerm: $searchTerm, first: $first, skip: $skip) {\n            brandAppearance {\n                media {\n                    id\n                    permalink\n                    commentsCount\n                    likesCount\n                    caption\n                    mediaType\n                    timestamp\n                    video_views\n                    location\n                    mediaUrl\n                    profile {\n                        id\n                        name\n                        username\n                        followersCount\n                        followingCount\n                        biography\n                        profilePic\n                        avgLikes\n                        avgComments\n                        engRateValue\n                        categories\n                    }\n                }\n                brand {\n                    name\n                }\n            }\n            count\n        }\n    }\n"]);return R=function(){return e},e}function B(){var e=Object(b.a)(["\n    query MY_NOTIFICATIONS {\n        myNotifications {\n            id\n            isRead\n            title\n            createdAt\n            updatedAt\n            body\n            href\n            from\n        }\n    }\n"]);return B=function(){return e},e}function z(){var e=Object(b.a)(["\n    query searchTermQuery {\n        searchTerm @client\n    }\n"]);return z=function(){return e},e}function M(){var e=Object(b.a)(["\n    mutation setSearchTerm($searchTerm: String!) {\n        setSearchTerm(searchTerm: $searchTerm) @client\n    }\n"]);return M=function(){return e},e}function $(){var e=Object(b.a)(["\n    query MeQuery {\n        me @client {\n            id\n            email\n            name\n            role\n        }\n    }\n"]);return $=function(){return e},e}function F(){var e=Object(b.a)(["\n    query MeQuery {\n        me {\n            id\n            email\n            name\n            role\n        }\n    }\n"]);return F=function(){return e},e}w()(F()),w()($());var Y=w()(M()),Q=w()(z()),_=(w()(B()),w()(R())),W=w()(L()),G=w()(D()),H=w()(A()),U=w()(P()),J=new u.a({freezeResults:!0});J.writeData({data:y});var K=new m.ApolloLink(function(e,t){var a=localStorage.getItem("ACCESS_TOKEN");return e.setContext({headers:{Authorization:a?"Bearer ".concat(a):""}}),t(e)}),V=new p.a({uri:"wss://brandinfluencers.me/graphql",options:{reconnect:!0,connectionParams:{Authorization:"Bearer ".concat(localStorage.getItem("ACCESS_TOKEN"))}}}),Z=Object(h.createUploadLink)({uri:"https://brandinfluencers.me/graphql"}),X=Object(g.a)(function(e){var t=e.graphQLErrors,a=e.networkError;console.log("onErrorlink",t,a),t&&t.forEach(function(e){var t=e.message,a=e.locations,n=e.path;t.includes('Unexpected error value: "Hmmm, we\'re looking for this brand"')?ae.mutate({mutation:W,variables:{status:!0}}).then(function(){return console.log("mutation succeed")}).catch(function(e){return console.log(e)}):console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(a,", Path: ").concat(n))}),a&&console.log("[Network error]: ".concat(a))}),ee=K.concat(Z),te=Object(m.split)(function(e){var t=e.query,a=Object(d.l)(t),n=a.kind,r=a.operation;return"OperationDefinition"===n&&"subscription"===r},V,ee,y),ae=new f.a({link:m.ApolloLink.from([X,te]),cache:J,connectToDevTools:!0,resolvers:I,assumeImmutableResults:!0}),ne=(a(314),a(580)),re=ne.a,oe=ne.a.Content,ie=a(23),le=a(588),ce=a(29),se=a.n(ce),ue=a(51),me=a(582),de=a(585),pe=a(587),he=a(584),fe=a(291),ge=a(8),ye=a(113),ve=a.n(ye),be=a(275),Ee=a.n(be),we=a(207),ke=a(44),Oe=(a(277),function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e.toFixed(0)}),je=a(278),Se=a.n(je),Te=a(586),xe=a(589),Ce=a(279),Ne=a.n(Ce),qe=function(){return["red","volcano","orange","gold","green","cyan","blue","geekblue","purple"][Math.floor(9*Math.random())]},Ie=function(e){var t=e.media,a=Object(n.useState)(!1),o=Object(ie.a)(a,2),i=o[0],l=o[1],c=function(){var e=Object(ue.a)(se.a.mark(function e(){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l(!1);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return i?r.a.createElement("div",null,r.a.createElement(Te.a,{placement:"right",closable:!1,onClose:c,visible:i,className:"post-popover"},r.a.createElement("div",{className:"post-details"},r.a.createElement("div",{className:"profile-header pointer",onClick:function(){return window.open("https://instagram.com/".concat(t.media.profile.username),"_blank")},title:"Show ".concat(t.media.profile.username," profile")},r.a.createElement("div",{className:"profile-img",style:{backgroundImage:"url(".concat(t.media.profile&&t.media.profile.profilePic||"",")")}}),r.a.createElement("div",{className:"name"},t.media.profile.name),r.a.createElement("div",{className:"link"},r.a.createElement(ge.a,{type:"instagram"})," / ",r.a.createElement("span",null,t.media.profile.username)),r.a.createElement(ge.a,{type:"close",className:"close-btn",onClick:c})),r.a.createElement("div",{className:"post-img-container"},r.a.createElement("div",{className:"post-img pointer",onClick:function(){return window.open(t.media.permalink,"_blank")},style:{backgroundImage:"url(".concat(t.media.mediaUrl||"",")")},title:"Show Post"})),r.a.createElement("div",{className:"interactions-box pointer",onClick:function(){return window.open(t.media.permalink,"_blank")},title:"Show Post"},r.a.createElement("div",{className:"interaction"},r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},r.a.createElement(ge.a,{type:"heart"}))),r.a.createElement("div",null,r.a.createElement("span",{className:"bold"},Oe(t.media.likesCount)||"0"),r.a.createElement("br",null),r.a.createElement("span",{className:"gray"},"Likes"))),r.a.createElement("div",{className:"interaction"},r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},r.a.createElement(ge.a,{type:"message"}))),r.a.createElement("div",null,r.a.createElement("span",{className:"bold"},Oe(t.media.commentsCount)||"0"),r.a.createElement("br",null),r.a.createElement("span",{className:"gray"},"Comments")))),r.a.createElement("div",{className:"post-description"},t.media.caption),r.a.createElement("div",{style:{fontSize:"16px",fontWeight:600}},"Mentions: "),r.a.createElement("div",{className:"post-tags"},function(e){if(e&&e.length>0){var t=Ne()(e,{symbol:!1,unique:!0});return t&&t.length>0?t:[]}return[]}(t.media.caption).map(function(e){return r.a.createElement(xe.a,{color:qe(),className:"pointer",onClick:function(){return window.open("https://instagram.com/".concat(e),"_blank")}},"@".concat(e))})),r.a.createElement("div",{style:{fontSize:"16px",fontWeight:600}},"Tags: "),r.a.createElement("div",{className:"post-tags"},function(e){if(e&&e.length>0){var t=e.match(/#[Lp\{\}]+/gi);return t&&t.length>0?t:[]}return[]}(t.media.caption).map(function(e){return r.a.createElement(xe.a,{className:"pointer",color:qe(),onClick:function(){return window.open("https://www.instagram.com/explore/tags/".concat(e.substring(1)),"_blank")}},e)}))))):r.a.createElement("a",{onClick:function(){return l(!0)}},"More Details >>")},Pe=function(e){var t=[];if(e&&e.length)try{e.map(function(e,a){var n=e.media,o=(n.likesCount+n.commentsCount)/e.media.profile.followersCount*100;t.push({key:a,influencer:Ae(e.media.profile),postDate:Se.a.unix(e.media.timestamp).format("DD/MM/YYYY hh:mm a"),posttype:e.media.mediaType,engagementrate:"".concat(o.toFixed(2),"%"),er:o,followers:Oe(e.media.profile.followersCount),followersCount:e.media.profile.followersCount,likes:Oe(e.media.profile.avgLikes),avgLikes:e.media.profile.avgLikes,comments:Oe(e.media.profile.avgComments),avgComments:e.media.profile.avgComments,viewposts:r.a.createElement(Ie,{media:e,er:o})})})}catch(a){console.log(a),pe.a.warning(a)}return t},Ae=function(e,t){return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("img",{src:e.profilePic,width:56,height:56,style:{borderRadius:"4px"}})),r.a.createElement("span",{style:{marginLeft:"6px"}},r.a.createElement("a",{target:"_blank",href:t?t.permalink:"https://instagram.com/".concat(e.username),style:{fontSize:"15px"}},e.name)))},De=a(590),Le=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},Re=function(e){var t=e.showModal,a=void 0===t||t,o=Object(n.useState)(!1),i=Object(ie.a)(o,2),l=i[0],c=(i[1],Object(n.useState)(!1)),s=Object(ie.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)(void 0),p=Object(ie.a)(d,2),h=p[0],f=p[1],g=Object(ke.a)(H),y=Object(ie.a)(g,1)[0],v=Object(ke.b)(Q,{notifyOnNetworkStatusChange:!0}),b=(v.loading,v.data),E=(v.error,Object(ke.a)(W,{notifyOnNetworkStatusChange:!0})),w=Object(ie.a)(E,1)[0],k=Object(ke.b)(G).data;return!k&&a?null:a?r.a.createElement(de.a,{visible:k.status,centered:!0,title:"Oops...",onOk:Object(ue.a)(se.a.mark(function e(){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Le(h)){e.next=7;break}return m(!0),e.next=4,y({variables:{email:h,brand:b.searchTerm}});case 4:setTimeout(Object(ue.a)(se.a.mark(function e(){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m(!1),e.next=3,w({variables:{status:!1}});case 3:pe.a.success("Great!");case 4:case"end":return e.stop()}},e)})),2e3),e.next=8;break;case 7:pe.a.warning("Please enter a valid email address.");case 8:case"end":return e.stop()}},e)})),okButtonProps:{title:"Subscribe"},onCancel:Object(ue.a)(se.a.mark(function e(){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({variables:{status:!1}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),destroyOnClose:!0,closable:!1,maskClosable:!1,width:"40vw"},r.a.createElement("div",null,r.a.createElement(le.a,{icon:r.a.createElement(De.a,null),title:"Sorry, we couldn't find any results matching brand: ".concat(b.searchTerm),style:{paddingBottom:"30px"}}),r.a.createElement("div",{style:{paddingLeft:"32px",fontSize:"14px",fontWeight:"bold",textAlign:"center"}},r.a.createElement("div",null,"However, we've just started collecting mentions about your brand"),r.a.createElement("div",null,"If you'd like to get the results as soon as we have it ready"),r.a.createElement("div",null,"Subscribe with your email, and we will notify you with the results"),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement("span",{style:{fontSize:"16px",fontWeight:"bold"}},"Email: "),r.a.createElement(he.a,{type:"email",style:{height:"42px",marginTop:"10px"},suffix:r.a.createElement(fe.a,{title:"Insert Your email, to get report about the brand influencers"},r.a.createElement(ge.a,{type:"info-circle",style:{color:"rgba(0,0,0,.45)"}})),disabled:l||u,placeholder:"Your email, EX: john@example.com",onChange:function(e){return f(e.target.value)},value:h,width:"60vw"}))))):r.a.createElement("div",null,r.a.createElement(le.a,{icon:r.a.createElement(De.a,null),title:"Sorry, we couldn't find any results matching brand: ".concat(b.searchTerm),style:{paddingBottom:"30px"}}),r.a.createElement("div",{style:{paddingLeft:"32px",fontSize:"14px",fontWeight:"bold",textAlign:"center"}},r.a.createElement("div",null,"However, we've just started collecting mentions about your brand"),r.a.createElement("div",null,"If you'd like to get the results as soon as we have it ready"),r.a.createElement("div",null,"Subscribe with your email, and we will notify you with the results"),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement("span",{style:{fontSize:"16px",fontWeight:"bold"}},"Email: "),r.a.createElement(he.a,{type:"email",style:{height:"42px",marginTop:"10px"},suffix:r.a.createElement(fe.a,{title:"Insert Your email, to get report about the brand influencers"},r.a.createElement(ge.a,{type:"info-circle",style:{color:"rgba(0,0,0,.45)"}})),disabled:l||u,placeholder:"Your email, EX: john@example.com",onChange:function(e){return f(e.target.value)},value:h,width:"60vw"}))))},Be=function(e){var t=e.searchTerm,a=e.setLoading,o=(e.setError,e.globalLoading),i=Object(n.useState)(1),l=Object(ie.a)(i,2),c=l[0],s=l[1],u=Object(n.useState)(10),m=Object(ie.a)(u,2),d=m[0],p=(m[1],Object(n.useState)(0)),h=Object(ie.a)(p,2),f=h[0],g=(h[1],Object(n.useState)(!1)),y=Object(ie.a)(g,2),v=y[0],b=y[1],E=function(e,t,a){var n=Object(ke.b)(_,{variables:{searchTerm:e,first:t,skip:a},fetchPolicy:"network-only"}),r=n.data,o=n.loading,i=n.fetchMore,l=n.updateQuery,c=n.error;return o?{loading:o,data:void 0,error:c}:{data:r,loading:o,loadMore:o?function(){}:function(e,t,a){return i({variables:{searchTerm:e,first:t,skip:a},fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0,updateQuery:function(e,t){var a=t.fetchMoreResult.brandAppearance;return a.brandAppearance.length?{brandAppearance:{brandAppearance:[].concat(Object(we.a)(e.brandAppearance.brandAppearance),Object(we.a)(a.brandAppearance)),count:a.count,__typename:"brandAppearancePayload"}}:e}})},updateQuery:l,error:c}}(t,d,f),w=E.data,k=E.loading,O=E.loadMore,j=E.error,S=function(){var e=Object(ue.a)(se.a.mark(function e(a){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),!(a>c)){e.next=4;break}return e.next=4,O(t,d,10*(a-1));case 4:b(!1),s(a);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){o&&s(1)});var T=function(){return ae.mutate({mutation:W,variables:{status:!0}}).then(function(){}).catch(function(e){return console.log(e)}),r.a.createElement(r.a.Fragment,null)};if(k)return a(!0),r.a.createElement(Ee.a,{css:"\n                    display: block;\n                    margin: 0 auto;\n                    border-color: red;\n                    background-color: whitesmoke;\n                ",size:100,color:"#001529",loading:!0});if(!w||j)return a&&a(!1),T();var x=w.brandAppearance,C=x.brandAppearance,N=x.count;return a&&a(!1),r.a.createElement("div",null,r.a.createElement("div",{className:"search-title"},"The following influencers/creators mentioned ",ve()(t)," in their posts:"),0===C.length?T():r.a.createElement(me.a,{dataSource:Pe(C),columns:[{title:"Influencer",dataIndex:"influencer",key:"influencer"},{title:"Post Date",dataIndex:"postDate",key:"postDate"},{title:"Post Type",dataIndex:"posttype",key:"posttype"},{title:"Eng. Rate",dataIndex:"engagementrate",key:"engagementrate",sorter:function(e,t){return e.er-t.er}},{title:"Followers",dataIndex:"followers",key:"followers",sorter:function(e,t){return e.followersCount-t.followersCount}},{title:"Avg. Likes",dataIndex:"likes",key:"likes",sorter:function(e,t){return e.avgLikes-t.avgLikes}},{title:"Avg. Comments",dataIndex:"comments",key:"comments",sorter:function(e,t){return e.avgComments-t.avgComments}},{title:"View Posts",dataIndex:"viewposts",key:"viewposts"}],pagination:{total:N,current:c,onChange:S},loading:v}))},ze=function(e){var t=e.setLoading,a=e.searchTerm,o=Object(n.useState)(null),i=Object(ie.a)(o,2),l=(i[0],i[1]);return r.a.createElement("div",null,r.a.createElement("div",{className:"influencers-table"},a?r.a.createElement("div",{className:"home"},r.a.createElement(Be,{searchTerm:a,setLoading:t,setError:l})):r.a.createElement(le.a,{status:"404",title:"Find your brand competitors by only one click!",subTitle:"Results will appear here..."})))},Me=a(63),$e=function(e){e.location;return r.a.createElement("div",null,r.a.createElement(le.a,{status:"500",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(Me.a,{to:"/"},"Back Home")}))},Fe=a(64),Ye=a(591),Qe=["mango","realmadrid","zara","urbanoutfitters","cocacola","gucci","ilmakiage","adidas","asos","hm","dolcegabbana","fendi","prada","burberry","hermes","hypebeast","cartier","hublot","nike","fossil","luvlou","kohls","puma","lego","diesel"],_e=function(e){var t=e.setSearchTerm;return r.a.createElement("div",{style:{width:"60%",margin:"0 auto",marginTop:"30px"}},r.a.createElement("div",{style:{fontFamily:"AvenirMedium",fontSize:"18px",color:"#001529"}},r.a.createElement(Ye.a,{twoToneColor:"#eb2f96"})," ",r.a.createElement("h2",{style:{display:"inline-block"}},"Recently Searched Brands:")),r.a.createElement("div",{className:"searched-brands-list",style:{marginTop:"5px"}},Qe.map(function(e){return r.a.createElement("a",{href:"/brands/".concat(e,"-influencers")},r.a.createElement(xe.a,{style:{marginBottom:"5px"},color:qe(),onClick:function(a){return t(e)},className:"pointer"},"@",e))})))},We=a(154),Ge=a(150),He=a(3),Ue=a.n(He),Je=function(e){var t=e.label,a=e.iconType,n=e.type,o=Object(Fe.a)(e,["label","iconType","type"]),i=Object(Ge.b)(o),l=Object(ie.a)(i,3),c=l[0],s=l[1];l[2];return r.a.createElement("div",{className:"input-field-wrapper"},r.a.createElement("div",{className:"form-label-v2"},t),s.touched&&s.error&&r.a.createElement("span",{className:"error-message"},s.error),"textarea"===n?r.a.createElement(he.a.TextArea,Object.assign({size:"large"},c,o,{prefix:r.a.createElement(ge.a,{type:a}),className:Ue()({required:s.touched&&s.error}),rows:5,style:{height:"unset"}})):r.a.createElement(he.a,Object.assign({size:"large"},c,o,{prefix:r.a.createElement(ge.a,{type:a}),className:Ue()({required:s.touched&&s.error})})))},Ke=a(583),Ve=a(581),Ze=a(53),Xe=function(e){var t=e.children,a=Object(Fe.a)(e,["children"]);return r.a.createElement(Ze.a,Object.assign({size:"large"},a),t)},et=function(e){var t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value;pe.a.error(i.message)}}catch(l){a=!0,n=l}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}},tt={email:"",message:""},at=We.object().shape({email:We.string().email().required("*Required"),message:We.string().required("*Required")}),nt=function(e){e.history,e.Component,e.title,Object(Fe.a)(e,["history","Component","title"]);var t=Object(ke.a)(U),a=Object(ie.a)(t,1)[0];return r.a.createElement("div",{className:"footer",style:{width:"100%"}},r.a.createElement("div",{style:{width:"50%"},className:"contact-form"},r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-evenly"}},r.a.createElement("div",{className:"title"},"Would you like to get more reports? Let us know..."),r.a.createElement("div",{style:{width:"70%"},className:"inner-contact-form"},r.a.createElement(Ge.a,{initialValues:tt,validationSchema:at,onSubmit:function(){var e=Object(ue.a)(se.a.mark(function e(t,n){var r,o;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,o=n.resetForm,console.log("qweqeqe"),e.prev=2,console.log("qweqeqe"),e.next=6,a({variables:Object(v.a)({},t)});case 6:pe.a.success("We've received your message!"),o(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),r(!1),et(e.t0.graphQLErrors);case 14:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t,a){return e.apply(this,arguments)}}()},function(e){e.values;var t=e.isSubmitting,a=e.handleSubmit;return r.a.createElement(Ke.a,null,r.a.createElement(Ve.a,{className:"row",style:{marginTop:"0px"}},r.a.createElement(Je,{iconType:"user",name:"email",type:"text",label:"Email",placeholder:"name@company.com"})),r.a.createElement(Ve.a,{className:"row",style:{marginTop:"20px"}},r.a.createElement(Je,{iconType:"lock",name:"message",type:"textarea",label:"Message",placeholder:"What's in your mind?"})),r.a.createElement(Ve.a,null,r.a.createElement(Xe,{htmlType:"submit",type:"primary",disabled:t,className:"wf-btn-primary-v2",onClick:a},t?"SENDING...":r.a.createElement(r.a.Fragment,null,"SEND",r.a.createElement(ge.a,{type:"arrow-right"})))))})))),r.a.createElement("div",{style:{width:"50%"},className:"footer-links"},"2019-2020 \xa9 Brand Influencers Social. All rights reserved"," ",r.a.createElement("div",null," ",r.a.createElement("a",{href:"/privacy-policy"},"Privacy Policy"))))},rt=he.a.Search,ot=function(e){var t=e.history,a=e.Component,o=(e.title,e.match),i=Object(Fe.a)(e,["history","Component","title","match"]),l=o&&o.params&&o.params.id?o.params.id:null,c="";l&&(c=l.split("-")[0]);var s=Object(n.useState)(c),u=Object(ie.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(!1),h=Object(ie.a)(p,2),f=h[0],g=h[1],y=Object(ke.a)(Y,{notifyOnNetworkStatusChange:!0}),v=Object(ie.a)(y,1)[0];return r.a.createElement("div",{className:"page-layout"},r.a.createElement("div",{className:"sub-header"},r.a.createElement("div",{className:"search-form-wrapper"},r.a.createElement("div",{className:"title"},"Find Instagram Brand Influencers"),r.a.createElement(rt,{placeholder:"Enter any brand instagram accoount. Eg: Zara",enterButton:"Search",size:"large",inputMode:"search",onSearch:function(){var e=Object(ue.a)(se.a.mark(function e(t){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return d(t),e.next=4,v({variables:{searchTerm:t}});case 4:e.next=7;break;case 6:pe.a.warn("Brand name is Required.");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),loading:f}))),r.a.createElement(_e,{setSearchTerm:function(){var e=Object(ue.a)(se.a.mark(function e(t){return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(t),e.next=3,v({variables:{searchTerm:t}});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),r.a.createElement(a,Object.assign({routerHistory:t},i,{setLoading:g,searchTerm:m,globalLoading:f})),r.a.createElement(Re,null),r.a.createElement(nt,null))},it=function(e){var t=e.component,a=(e.userRole,e.roles,Object(Fe.a)(e,["component","userRole","roles"]));return r.a.createElement(l.a,Object.assign({},a,{render:function(e){return r.a.createElement(t,e)}}))},lt="ADMIN",ct="BRANDS",st="CREATOR",ut=a(289),mt=function(e){return Object(ut.a)(e),r.a.createElement("div",{style:{marginLeft:"8%",marginTop:"20px",marginRight:"8%"}},r.a.createElement("h1",null,"Privacy Policy for BrandInfluencers.me"),r.a.createElement("p",null,"At BrandInfluencers, accessible from BrandInfluencers.me, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BrandInfluencers and how we use it."),r.a.createElement("p",null,"If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."),r.a.createElement("p",null,"This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in BrandInfluencers. This policy is not applicable to any information collected offline or via channels other than this website."),r.a.createElement("h2",null,"Consent"),r.a.createElement("p",null,"By using our website, you hereby consent to our Privacy Policy and agree to its terms."),r.a.createElement("h2",null,"Information we collect"),r.a.createElement("p",null,"The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."),r.a.createElement("p",null,"If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."),r.a.createElement("p",null,"When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."),r.a.createElement("h2",null,"How we use your information"),r.a.createElement("p",null,"We use the information we collect in various ways, including to:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Provide, operate, and maintain our webste"),r.a.createElement("li",null,"Improve, personalize, and expand our webste"),r.a.createElement("li",null,"Understand and analyze how you use our webste"),r.a.createElement("li",null,"Develop new products, services, features, and functionality"),r.a.createElement("li",null,"Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes"),r.a.createElement("li",null,"Send you emails"),r.a.createElement("li",null,"Find and prevent fraud")),r.a.createElement("h2",null,"Log Files"),r.a.createElement("p",null,"BrandInfluencers follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the"," ",r.a.createElement("a",{href:"https://www.privacypolicygenerator.info"},"Privacy Policy Generator")," and the ",r.a.createElement("a",{href:"https://www.disclaimergenerator.org/"},"Disclaimer Generator"),"."),r.a.createElement("h2",null,"Google DoubleClick DART Cookie"),r.a.createElement("p",null,"Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL \u2013"," ",r.a.createElement("a",{href:"https://policies.google.com/technologies/ads"},"https://policies.google.com/technologies/ads")),r.a.createElement("h2",null,"Advertising Partners Privacy Policies"),r.a.createElement("p",null,"You may consult this list to find the Privacy Policy for each of the advertising partners of BrandInfluencers."),r.a.createElement("p",null,"Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on BrandInfluencers, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."),r.a.createElement("p",null,"Note that BrandInfluencers has no access to or control over these cookies that are used by third-party advertisers."),r.a.createElement("h2",null,"Third Party Privacy Policies"),r.a.createElement("p",null,"BrandInfluencers's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options."," "),r.a.createElement("p",null,"You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."),r.a.createElement("h2",null,"CCPA Privacy Rights (Do Not Sell My Personal Information)"),r.a.createElement("p",null,"Under the CCPA, among other rights, California consumers have the right to:"),r.a.createElement("p",null,"Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."),r.a.createElement("p",null,"Request that a business delete any personal data about the consumer that a business has collected."),r.a.createElement("p",null,"Request that a business that sells a consumer's personal data, not sell the consumer's personal data."),r.a.createElement("p",null,"If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."),r.a.createElement("h2",null,"GDPR Data Protection Rights"),r.a.createElement("p",null,"We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:"),r.a.createElement("p",null,"The right to access \u2013 You have the right to request copies of your personal data. We may charge you a small fee for this service."),r.a.createElement("p",null,"The right to rectification \u2013 You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete."),r.a.createElement("p",null,"The right to erasure \u2013 You have the right to request that we erase your personal data, under certain conditions."),r.a.createElement("p",null,"The right to restrict processing \u2013 You have the right to request that we restrict the processing of your personal data, under certain conditions."),r.a.createElement("p",null,"The right to object to processing \u2013 You have the right to object to our processing of your personal data, under certain conditions."),r.a.createElement("p",null,"The right to data portability \u2013 You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."),r.a.createElement("p",null,"If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."),r.a.createElement("h2",null,"Children's Information"),r.a.createElement("p",null,"Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."),r.a.createElement("p",null,"BrandInfluencers does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."))},dt="/",pt="/brands/:id",ht="/privacy-policy",ft="*",gt=function(e){var t=e.userRole;return r.a.createElement(l.c,null,r.a.createElement(it,{path:dt,component:function(e){return r.a.createElement(ot,Object.assign({Component:ze},e,{title:"Home page"}))},exact:!0,roles:[lt,ct,st],userRole:t}),r.a.createElement(it,{path:pt,component:function(e){return r.a.createElement(ot,Object.assign({Component:ze},e,{title:"Home page"}))},roles:[lt,ct,st],userRole:t}),r.a.createElement(it,{path:ht,component:function(e){return r.a.createElement(ot,Object.assign({Component:mt},e,{title:"Home page"}))}}),r.a.createElement(l.a,{path:ft,exact:!0,component:$e}))},yt=function(){return r.a.createElement("div",{className:"w-header"},r.a.createElement(ne.a.Header,null,r.a.createElement("div",{className:"logo"},r.a.createElement(Me.a,{to:"/"},r.a.createElement("span",{className:"site-name"},"BrandInfluencers")))))},vt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(yt,null),r.a.createElement(re,null,r.a.createElement(oe,{className:"app-page-wrapper",id:"app-page-wrapper-id"},r.a.createElement(gt,{userRole:"BRAND"}))))},bt=a(41),Et=Object(bt.a)();console.log("production"),console.log("https://brandinfluencers.me/graphql"),i.a.render(r.a.createElement(c.a,{client:ae},r.a.createElement(s.a,{client:ae},r.a.createElement(l.b,{history:Et},r.a.createElement(vt,null)))),document.getElementById("root"))}},[[297,1,2]]]);