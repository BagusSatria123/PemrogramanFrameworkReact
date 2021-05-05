<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

        <!-- Styles -->
        <style>
            .body{
                height: auto;
            }
            
            .container{
                margin-top: 50px;
                margin-left: auto;
                margin-right: auto;
            }

        </style>
    </head>
    <body>
    <div class="container">
        <div class="container-fluid">
            <div class="row">
                <div class="card card-primary card-outline">
                    <div class="card-body box-profile">
                    <div class="text-center">
                        <img src="{{ asset('photo/Bagus Satria Putra.jpg')}}" alt="profil" class="profile-user-img img-responsive img-circle" width="125px" height="125px">
                    </div>
                    <hr>
                    <strong>
                        <i class="fas fa-map-marker mr-2"></i>
                        Nama
                    </strong>
                    <p class="text-muted">
                        Bagus Satria Putra
                    </p>
                    <hr>
                    <strong>
                        <i class="fas fa-map-marker mr-2"></i>
                        Kelas
                    </strong>
                    <p class="text-muted">
                        TI-3F
                    </p>
                    <hr>
                    <strong>
                        <i class="fas fa-envelope mr-2"></i>
                        NIM
                    </strong>
                    <p class="text-muted">
                        1841720146
                    </p>
                    <hr>
                    <strong>
                        <i class="fas fa-phone mr-2"></i>
                        Email
                    </strong>
                    <p class="text-muted">
                        bagussatria1711004545@gmail.com
                    </p>
                    <hr>
                    <strong>
                        <i class="fas fa-map-marker mr-2"></i>
                        Github
                    </strong>
                    <p class="text-muted">
                        https://github.com/BagusSatria123
                    </p>
                    <hr>
                    <strong>
                        <i class="fas fa-map-marker mr-2"></i>
                        LinkedIn
                    </strong>
                    <p class="text-muted">
                        https://www.linkedin.com/in/bagus-satria-217aaa1b5/
                    </p>
                    <hr>
                    <strong>
                        <i class="fas fa-envelope mr-2"></i>
                        Youtube
                    </strong>
                    <p class="text-muted">
                        https://youtube.com/playlist?list=PLPGKfEfqkoZYfV6JgFig1b4du7njVki8U
                    </p>
                    <hr>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>
