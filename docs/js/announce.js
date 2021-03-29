var announcement_storage = sessionStorage.getItem('dyalog-announcement');
const WP_REST_API = "https://dyalog.wpengine.com/wp-json/wp/v2/";

document$.subscribe(async function() {
    const dyalog_announcement = document.getElementById("dyalog-announcement");
    if (announcement_storage == null) {
        const resp = await fetch(`${WP_REST_API}posts/1`);
        if ( resp.ok ) {
          const resp_json = await resp.json();
          const announcement_json = {
              text: resp_json.title.rendered,
              link: resp_json.link
          };
          sessionStorage.setItem('dyalog-announcement', JSON.stringify(announcement_json));
          announcement_storage = sessionStorage.getItem('dyalog-announcement');
        }
    }
    const announcement_object = JSON.parse(announcement_storage);
    dyalog_announcement.innerHTML += announcement_object.text;
    dyalog_announcement.href = announcement_object.link;
});
