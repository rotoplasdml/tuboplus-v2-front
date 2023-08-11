<template>
    <footer class="container-fluid bg-blue-5 text-white">
        <div class="row">
            <div class="col-10 offset-1">
                <div class="row">
                    <div class="col-12 text-center | col-md-4 text-md-start | pb-3 mb-3" id="contactanos">
                        <h3 class="blue-2 fs-5">Contáctanos</h3>
                        <a class="hvr-forward" href="tel:8005063000">
                            <img src="/imagenes/comun/icon-phone.svg" alt="Icono Teléfono">
                            800 506 3000
                        </a>
                        <br>
                        <a class="hvr-forward" href="mailto:correo@rotoplas.com">
                            <img src="/imagenes/comun/icon-email.svg" alt="Icono Correo">
                            Contacto
                        </a>
                    </div>
                    <div class="col-12 text-center | col-md-4 text-md-start | pb-3 mb-3" id="enlaces-utiles">
                        <h3 class="blue-2 fs-5">Enlaces útiles</h3>
                        <NuxtLink class="hvr-forward" to="/">Soluciones Residenciales</NuxtLink><br>
                        <NuxtLink class="hvr-forward" to="/">Soluciones Especializadas</NuxtLink><br>
                        <NuxtLink class="hvr-forward" to="/">¿Dónde comprar?</NuxtLink><br>
                        <NuxtLink class="hvr-forward" to="/">Descargas y herramientas</NuxtLink><br>
                        <NuxtLink class="hvr-forward" to="/">Blog</NuxtLink><br>
                        <NuxtLink class="hvr-forward" to="/">Sobre Tuboplus</NuxtLink><br>
                        <NuxtLink class="hvr-forward" to="/">Capacitación</NuxtLink>
                    </div>
                    <div class="col-12 text-center | col-md-4 text-md-start | pb-3 mb-3" id="siguenos">
                        <h3 class="blue-2 fs-5">Síguenos</h3>
                        <a class="hvr-float" href="#">
                            <img src="/imagenes/comun/icon-facebook.svg" alt="Icono Facebook">
                        </a>
                        <a class="hvr-float" href="#">
                            <img src="/imagenes/comun/icon-youtube.svg" alt="Icono Youtube">
                        </a>
                        <a class="hvr-float" href="#">
                            <img src="/imagenes/comun/icon-instagram.svg" alt="Icono Instagram">
                        </a>
                    </div>
                </div>
                <div id="segunda-linea" class="row align-items-center">
                    <div class="col-12 text-center | col-md-4 text-md-start | pb-3">
                        <NuxtLink to="/">
                            <img id="footer-logo-rotoplas" src="/imagenes/comun/logo-rotoplas-azul-blanco.svg" alt="Logo Rotoplas">
                        </NuxtLink>
                    </div>
                    <div class="col-12 text-center | col-md-4 text-md-start | pb-3">
                        <p class="m-0">Copyright© 2023 Rotoplas S.A. de C.V.</p>
                    </div>
                    <div class="col-12 text-center | col-md-4 text-md-start | pb-3">
                        <NuxtLink class="hvr-forward" to="/">Aviso de privacidad</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script></script>


<style>
    footer {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    footer h3 {
        margin-bottom: 1rem;
    }

    footer a {
        color: #fff;
        transition: all ease .3s;
        margin-bottom: .5rem;
    }
    footer a:hover {
        color: #009cde;
    }

    #footer-logo-rotoplas {
        width: 150px;
    }



    #contactanos a img {
        width: 25px;
        margin-right: 0.25rem;
    }

    #siguenos a {
        margin-right: 1rem;
    }
    #siguenos a img {
        width: 40px;
    }

    #segunda-linea {
        margin-top: 1rem;
    }
</style>