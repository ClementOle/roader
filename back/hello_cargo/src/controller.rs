use actix_web::{get, HttpResponse, post};

#[get("/hello-world")]
pub async fn hello_world() -> HttpResponse {
    HttpResponse::Ok()
        .content_type("plain/text")
        .body("Hello World !")
}


