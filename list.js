var list = {

	"WEB SITE": {
		"HTML": [
			[ "HTML Introduction", "manual/SSP001_HTML/HTML-Introduction" ],
			[ "HTML Tags", "manual/SSP001_HTML/HTML-Tags" ],
			[ "HTML Forms", "manual/SSP001_HTML/HTML-Forms" ],
			[ "Character Formatting", "manual/SSP001_HTML/Character-Formatting" ],
			[ "HTML Lists", "manual/SSP001_HTML/HTML-Lists" ],
			[ "HTML Tables", "manual/SSP001_HTML/HTML-Tables" ],
			[ "Hyper links", "manual/SSP001_HTML/Hyperlinks" ],
			[ "Displaying Images", "manual/SSP001_HTML/Displaying-Images" ],
			[ "Image Mapping and Editing", "manual/SSP001_HTML/Image-Mapping-and-Editing" ],
			[ "Display HTML code", "manual/SSP001_HTML/Display-HTML-code" ],
			[ "Three line icon code", "manual/SSP001_HTML/Three-line-icon-code" ]
		],
		"CSS3": [
			[ "image blur effect", "manual/SSP001_CSS3/image-blur-effect" ],
			[ "image grayscale effect", "manual/SSP001_CSS3/image-grayscale-effect" ],
			[ "Animated Button", "manual/SSP001_CSS3/Animated-Button" ],
			[ "Animated Button Ripple Effect", "manual/SSP001_CSS3/Animated-Button-Ripple-Effect" ],
			[ "Animated Buttons Pressed Effect", "manual/SSP001_CSS3/Animated-Buttons-Pressed-Effect" ],
			[ "Appendix 0", "manual/SSP001_CSS3/Appendix-0" ]
		],
		"JAVA SCRIPT EXAMPLES": [
			[ "Animated Search Form", "manual/SSP001_JS/Animated-Search-Form" ],
			[ "Accordion", "manual/SSP001_JS/Accordion" ],
			[ "Responsive Topnav", "manual/SSP001_JS/Responsive-Topnav" ],
			[ "Horizontal Scrollable Menu", "manual/SSP001_JS/Horizontal-Scrollable-Menu" ],
			[ "Fixed Top Menu", "manual/SSP001_JS/Fixed-Top-Menu" ],
			[ "Fullscreen Overlay Nav", "manual/SSP001_JS/Fullscreen-Overlay-Nav" ],
			[ "Animated Sidenav", "manual/SSP001_JS/Animated-Sidenav" ],
			[ "Sidenav Push", "manual/SSP001_JS/Sidenav-Push" ],
			[ "Sidenav", "manual/SSP001_JS/Sidenav" ],
			[ "Modal Example", "manual/SSP001_JS/Modal-Example" ],
			[ "Bottom Modal", "manual/SSP001_JS/Bottom-Modal" ],
			[ "Animated Modal with Header and Footer", "manual/SSP001_JS/Animated-Modal-with-Header-and-Footer" ],
			[ "Image Modal", "manual/SSP001_JS/Image-Modal" ],
			[ "Image Gallery", "manual/SSP001_JS/Image-Gallery" ],
			[ "Image Slide Show", "manual/SSP001_JS/Image-Slide-Show" ],
			[ "Image-Slide-Show-auto", "manual/SSP001_JS/Image-Slide-Show-auto" ],
			[ "Calculator", "manual/SSP001_JS/Calculator" ],
			[ "Popups", "manual/SSP001_JS/Popups" ],
			[ "Notes", "manual/SSP001_JS/Notes" ],
			[ "PC HTML mp4 Player", "manual/SSP001_JS/PC-HTML-mp4-Player" ],
			[ "Android HTML mp4 Player", "manual/SSP001_JS/Android-HTML-mp4-Player" ],
			[ "Tabs", "manual/SSP001_JS/Tabs" ],
			[ "Todo-list", "manual/SSP001_JS/Todo-list" ],
			[ "Tool-tips", "manual/SSP001_JS/Tool-tips" ],
			[ "Toggle Switch", "manual/SSP001_JS/Toggle-Switch" ],
			[ "Snackbar Toast", "manual/SSP001_JS/Snackbar-Toast" ],
			[ "Progress bar", "manual/SSP001_JS/Progress-bar" ],
			[ "JS Animation", "manual/SSP001_JS/JS-Animation" ],
			[ "Alert Messages", "manual/SSP001_JS/Alert-Messages" ],
			[ "Filter List", "manual/SSP001_JS/Filter-List" ],
			[ "Popup Login", "manual/SSP001_JS/Popup-Login" ],
			[ "Popup Login", "manual/SSP001_JS/Popup-Login" ],
			[ "Loaders1", "manual/SSP001_JS/Loaders1" ],
			[ "Loaders2", "manual/SSP001_JS/Loaders2" ],
			[ "Filter Table", "manual/SSP001_JS/Filter-Table" ],
			[ "Responsive Pricing Tables", "manual/SSP001_JS/Responsive-Pricing-Tables" ],
			[ "Web cam access", "manual/SSP001_JS/Web-cam-access" ],
			[ "Draw a triangle", "manual/SSP001_JS/draw-a-triangle" ],
			[ "Confirm dialog box", "manual/SSP001_JS/Dialog-box-confirm" ],
			[ "Alart dialog box", "manual/SSP001_JS/Dialog-box-alart" ],
			[ "Prompt dialog box", "manual/SSP001_JS/Dialog-box-prompt" ],
			[ "Paralax", "manual/SSP001_JS/Paralax" ],
			[ "Drag And Drop", "manual/SSP001_JS/Drag-And-Drop" ]
		],
		"Flash Action Script": [
			[ "Flash Player", "manual/SSP001_AS/Flash-Action-Script-Media-Player" ]
		]
	},
	"PYTHON": {
		"Introduction": [
			[ "Introduction To Python", "manual/SSP001_Python/Introduction-To-Python" ]
		],
		"Examples": [
			[ "SSP text editer", "manual/SSP001_Python/SSP-text-editer" ]
		]
	},
	"MACHINE CODE": {
		"ASM": [
			[ "Introduction", "manual/SSP001_ASM/asm1" ]
		]
	},
	"Other notes": {
		"Accounting": [
			[ "Introduction", "manual/SSP001_Acc/FINANCIAL-ACCOUNTING" ],
			[ "Introduction", "manual/SSP001_Acc/FINANCIAL-ACCOUNTING" ]
		]
	}

};

var pages = {};

for ( var section in list ) {

	pages[ section ] = {};

	for ( var category in list[ section ] ) {

		pages[ section ][ category ] = {};

		for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {

			var page = list[ section ][ category ][ i ];
			pages[ section ][ category ][ page[ 0 ] ] = page[ 1 ];

		}

	}

}
