use std::{io};
use actix_web::{App, HttpServer};

mod controller;

#[actix_web::main]
async fn main() -> io::Result<()> {

   HttpServer::new(|| {
       App::new()
           .service(controller::hello-world)
   })
   .bind("0.0.0.0:9090")?
       .run()
       .await
}
