export default {
	'.uk-range': {
		// Reset
		WebkitAppearance: 'var(--uk-range-webkit-appearance, none)',
		boxSizing: 'var(--uk-range-box-sizing, border-box)',

		// Layout
		margin: 'var(--uk-range-margin, 0)',
		verticalAlign: 'var(--uk-range-vertical-align, middle)',
		maxWidth: 'var(--uk-range-max-width, 100%)',
		width: 'var(--uk-range-width, 100%)',

		// Visual
		background: 'var(--uk-range-background, transparent)'
	},

	// Focus states
	'.uk-range:focus': {
		outline: 'var(--uk-range-focus-outline, none)'
	},

	// Mozilla specific
	'.uk-range::-moz-focus-outer': {
		border: 'none' // Static reset
	},

	// Thumb states
	'.uk-range:not(:disabled)::-webkit-slider-thumb': {
		cursor: 'var(--uk-range-thumb-cursor, pointer)'
	},
	'.uk-range:not(:disabled)::-moz-range-thumb': {
		cursor: 'var(--uk-range-thumb-cursor, pointer)'
	},

	// Track styles
	'.uk-range::-webkit-slider-runnable-track': {
		height: 'var(--uk-range-track-height, 3px)',
		borderRadius: 'var(--uk-range-track-radius, 500px)',
		backgroundColor: 'var(--uk-range-track-bg, hsl(var(--primary) / 0.2))'
	},

	// Track active states
	'.uk-range:focus::-webkit-slider-runnable-track, .uk-range:active::-webkit-slider-runnable-track':
		{
			backgroundColor: 'var(--uk-range-track-active-bg, hsl(var(--primary) / 0.2))'
		},

	// Mozilla track styles
	'.uk-range::-moz-range-track': {
		height: 'var(--uk-range-track-height, 3px)',
		borderRadius: 'var(--uk-range-track-radius, 500px)',
		backgroundColor: 'var(--uk-range-track-bg, hsl(var(--primary) / 0.2))'
	},

	// Mozilla track focus
	'.uk-range:focus::-moz-range-track': {
		backgroundColor: 'var(--uk-range-track-focus-bg, hsl(var(--primary) / 0.2))'
	},

	// Thumb styles
	'.uk-range::-webkit-slider-thumb': {
		// Reset
		WebkitAppearance: 'var(--uk-range-thumb-webkit-appearance, none)',

		// Layout
		marginTop: 'var(--uk-range-thumb-margin-top, -7px)',
		height: 'var(--uk-range-thumb-size, 1rem)',
		width: 'var(--uk-range-thumb-size, 1rem)',

		// Visual
		borderWidth: 'var(--uk-range-thumb-border-width, 1px)',
		borderStyle: 'var(--uk-range-thumb-border-style, solid)',
		borderColor: 'var(--uk-range-thumb-border-color, hsl(var(--primary) / 0.5))',
		borderRadius: 'var(--uk-range-thumb-radius, 500px)',
		backgroundColor: 'var(--uk-range-thumb-bg, hsl(var(--background)))'
	},
	'.uk-range::-moz-range-thumb': {
		border: 'var(--uk-range-thumb-border, 1px solid hsl(var(--primary) / 0.5))',
		height: 'var(--uk-range-thumb-size, 1rem)',
		width: 'var(--uk-range-thumb-size, 1rem)',
		marginTop: 'var(--uk-range-thumb-margin-top, -7px)',
		borderRadius: 'var(--uk-range-thumb-radius, 500px)',
		backgroundColor: 'var(--uk-range-thumb-bg, hsl(var(--background)))'
	},
	'.uk-input-range': {
		position: 'var(--uk-input-range-position, relative)',
		display: 'var(--uk-input-range-display, block)',
		height: 'var(--uk-input-range-height, 2.5rem)',
		userSelect: 'var(--uk-input-range-select, none)'
	},
	'.uk-input-range-runnable-track': {
		borderRadius: 'var(--uk-global-radius)',
		backgroundColor: 'var(--uk-input-range-track-bg, hsl(var(--primary) / 0.2))',
		position: 'var(--uk-input-range-track-position, absolute)',
		left: 'var(--uk-input-range-track-left, 0)',
		right: 'var(--uk-input-range-track-right, 0)',
		top: 'var(--uk-input-range-track-top, 50%)',
		height: 'var(--uk-input-range-track-height, 0.375rem)',
		transform: 'var(--uk-input-range-track-transform, translateY(-50%))'
	},
	'.uk-input-range-track': {
		borderRadius: 'var(--uk-global-radius)',
		backgroundColor: 'var(--uk-input-range-active-track-bg, hsl(var(--primary)))',
		position: 'var(--uk-input-range-track-position, absolute)',
		top: 'var(--uk-input-range-track-top, 50%)',
		height: 'var(--uk-input-range-track-height, 0.375rem)',
		transform: 'var(--uk-input-range-track-transform, translateY(-50%))'
	},
	'.uk-input-range-knob': {
		boxShadow: 'var(--uk-global-shadow)',
		position: 'var(--uk-input-range-knob-position, absolute)',
		top: 'var(--uk-input-range-knob-top, 50%)',
		height: 'var(--uk-input-range-knob-size, 1rem)',
		width: 'var(--uk-input-range-knob-size, 1rem)',
		transform: 'var(--uk-input-range-knob-transform, translate(-50%, -50%))',
		cursor: 'var(--uk-input-range-knob-cursor, pointer)',
		borderRadius: 'var(--uk-input-range-knob-radius, 9999px)',
		border: 'var(--uk-input-range-knob-border, 1px solid hsl(var(--primary) / 0.5))',
		backgroundColor: 'var(--uk-input-range-knob-bg, hsl(var(--background)))',
		'&:focus-visible': {
			outline: 'var(--uk-input-range-knob-focus-outline, none)',
			ringColor: 'var(--uk-input-range-knob-ring-color, hsl(var(--ring)))',
			ringWidth: 'var(--uk-input-range-knob-ring-width, 1px)'
		},
		'&:disabled': {
			cursor: 'var(--uk-input-range-knob-disabled-cursor, not-allowed)'
		}
	},
	'.uk-input-range-label': {
		position: 'var(--uk-input-range-label-position, absolute)',
		top: 'var(--uk-input-range-label-top, 1rem)',
		transform: 'var(--uk-input-range-label-transform, translateX(-50%))',
		whiteSpace: 'var(--uk-input-range-label-white-space, nowrap)'
	},
	'.uk-input-range-label.top': {
		top: 'var(--uk-input-range-label-top-position, -1.5rem)'
	}
};
