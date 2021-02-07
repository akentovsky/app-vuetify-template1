<template>
	<div id="app">
		<v-app>
			<!-- left menu -->
			<v-navigation-drawer absolute bottom temporary v-model="leftMenu">
				<v-list>
					<v-list-item v-for="(row, index) in nav" :key="index" link>
						<v-list-item-content>
							<v-list-item-title>
								<router-link :to="row.link">{{row.title}}</router-link> 
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
			<!-- top menu -->
			<v-app-bar app color="primary" dark>
				<v-app-bar-nav-icon
					@click="leftMenu = !leftMenu"
				></v-app-bar-nav-icon>
				<v-toolbar-title>Application</v-toolbar-title>
			</v-app-bar>
			<!-- content -->
			<v-main class="mt-2">
				<v-container>
					<router-view></router-view>
				</v-container>
			</v-main>
			<!-- footer -->
			<v-footer app height="60" color="#020202" dark>
				<div class="text-center" style="width: 100%">{{year}} &copy; MyApp</div>
			</v-footer>
		</v-app>
	</div>
</template>

<script>
export default {
	data: () => ({ 
		leftMenu: false,
		year: new Date().getFullYear(),
		nav:[
			{title: "Home", link:"/"},
			{title: "About", link:"/about"},
		]
	}),
};
</script>

