const APP_VERSION='loteria-grupal-20261128-1';
self.addEventListener('install',event=>{event.waitUntil(self.skipWaiting());});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of clients)client.postMessage({type:'APP_UPDATED',version:APP_VERSION});
  })());
});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
// No se cachea HTML/JS antiguo: el navegador obtiene siempre la versión publicada.
self.addEventListener('fetch',event=>{});
