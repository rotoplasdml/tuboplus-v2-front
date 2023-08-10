<template>
	<nav class="navbar navbar-expand-xl px-3">
		<NuxtLink class="navbar-brand" to="/">
			<img id="nav-logo" src="/images/tuboplus-logo.svg" alt="Tuboplus Logo" title="Tuboplus">
		</NuxtLink>
		<button 
			id="navegacion-toggler" 
			class="navbar-toggler" 
			type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#toggleMobileMenu" 
			aria-controls="toggleMobileMenu" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse flex-column" id="toggleMobileMenu">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">Soluciones<br>Residenciales</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">Soluciones<br>Especializadas</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">¿Dónde comprar?</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">Descargas y<br>Herramientas</NuxtLink>
				</li>
				<li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">Blog</NuxtLink>
				</li>
                <li class="nav-item mx-xl-1">
					<NuxtLink class="nav-link" to="/">Sobre<br>Nosotros</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>


<script></script>


<style>
#nav-logo {
    width: 150px;
}
</style>