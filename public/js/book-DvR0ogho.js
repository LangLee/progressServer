import{at as e}from"./vendor-BSAPUjJi.js";const d=()=>e.get("/books/getBooks").then(t=>t&&t.data&&t.data.success?t.data.data:Promise.reject(t&&t.data&&t.data.message)),s=t=>e.get("/books/getBookById",{params:{id:t}}).then(a=>a&&a.data&&a.data.success?a.data.data:Promise.reject(a&&a.data&&a.data.message)),n=t=>e.post("/books/createBook",t).then(a=>a&&a.data&&a.data.success?a.data.data:Promise.reject(a&&a.data&&a.data.message)),c=t=>e.post("/books/updateBook",t).then(a=>a&&a.data&&a.data.success?a.data.data:Promise.reject(a&&a.data&&a.data.message)),u=t=>e.post("/books/updateBookTitle",t).then(a=>a&&a.data&&a.data.success?a.data.data:Promise.reject(a&&a.data&&a.data.message)),r=t=>e.post("/books/removeBook",{id:t}).then(a=>a&&a.data&&a.data.success?a.data.data:Promise.reject(a&&a.data&&a.data.message)),k=t=>e.get("/books/searchBook",{params:{key:t}}).then(a=>a&&a.data&&a.data.success?a.data.data:Promise.reject(a&&a.data&&a.data.message));export{d as a,u as b,n as c,s as g,r,k as s,c as u};
