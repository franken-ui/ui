<div class="uk-container">
	<div class="grid md:grid-cols-3">
		<div class="uk-chart-container">
			<div class="p-4">
				<uk-line-chart>
					<script type="application/json">
						{
							"series": [
								{
									"name": "Desktops",
									"data": [186, 305, 237, 73, 209, 214]
								}
							],
							"chart": {
								"type": "line",
								"zoom": {
									"enabled": false
								},
								"toolbar": {
									"show": false
								}
							},
							"dataLabels": {
								"enabled": false
							},
							"stroke": {
								"curve": "straight",
								"width": 2
							},
							"colors": ["hsl(var(--chart-1))"],
							"grid": {
								"row": {
									"colors": []
								},
								"borderColor": "hsl(var(--border))"
							},
							"xaxis": {
								"categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
								"tooltip": {
									"enabled": false
								},
								"labels": {
									"style": {
										"colors": "hsl(var(--muted-foreground))"
									}
								},
								"axisBorder": {
									"show": false
								},
								"axisTicks": {
									"show": false
								}
							},
							"yaxis": {
								"labels": {
									"show": false
								}
							},
							"tooltip": {
								"title": {
									"show": false
								}
							}
						}
					</script>
				</uk-line-chart>
			</div>
		</div>
	</div>
</div>

<uk-theme-switcher>
	<select hidden>
		<optgroup data-key="mode" label="Mode">
			<option data-icon="sun" value="light">Light</option>
			<option data-icon="moon" value="dark">Dark</option>
		</optgroup>

		<optgroup data-key="chart" label="Chart">
			<option data-hex="#e76e50" value="uk-chart-default" selected>Default</option>
			<option data-hex="#2563eb" value="uk-chart-sapphire">Sapphire</option>
			<option data-hex="#e21d48" value="uk-chart-ruby">Ruby</option>
			<option data-hex="#1dc355" value="uk-chart-emerald">Emerald</option>
			<option data-hex="#ad7c48" value="uk-chart-daylight">Daylight</option>
			<option data-hex="#959593" value="uk-chart-midnight">Midnight</option>
		</optgroup>
	</select>
</uk-theme-switcher>
