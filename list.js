var list = {

	"WEB SITE": {
		"HTML": [
			[ "HTML Introduction", "manual/SSP001HTML/HTML-Introduction" ],
			[ "HTML Tags", "manual/SSP001HTML/HTML-Tags" ],
			[ "HTML Forms", "manual/SSP001HTML/HTML-Forms" ],
			[ "Character Formatting", "manual/SSP001HTML/Character-Formatting" ],
			[ "HTML Lists", "manual/SSP001HTML/HTML-Lists" ],
			[ "HTML Tables", "manual/SSP001HTML/HTML-Tables" ],
			[ "Hyper links", "manual/SSP001HTML/Hyperlinks" ],
			[ "Displaying Images", "manual/SSP001HTML/Displaying-Images" ],
			[ "Image Mapping and Editing", "manual/SSP001HTML/Image-Mapping-and-Editing" ],
			[ "Display HTML code", "manual/SSP001HTML/Display-HTML-code" ],
			[ "Three line icon code", "manual/SSP001HTML/Three-line-icon-code" ]
		],
		"CSS3": [
			[ "image blur effect", "manual/SSP001CSS3/image-blur-effect" ],
			[ "image grayscale effect", "manual/SSP001CSS3/image-grayscale-effect" ],
			[ "Animated Button", "manual/SSP001CSS3/Animated-Button" ],
			[ "Animated Button Ripple Effect", "manual/SSP001CSS3/Animated-Button-Ripple-Effect" ],
			[ "Animated Buttons Pressed Effect", "manual/SSP001CSS3/Animated-Buttons-Pressed-Effect" ],
			[ "Appendix 0", "manual/SSP001CSS3/Appendix-0" ]
		],
		"JAVA SCRIPT EXAMPLES": [
			[ "Animated Search Form", "manual/SSP001JS/Animated-Search-Form" ],
			[ "Accordion", "manual/SSP001JS/Accordion" ],
			[ "Responsive Topnav", "manual/SSP001JS/Responsive-Topnav" ],
			[ "Horizontal Scrollable Menu", "manual/SSP001JS/Horizontal-Scrollable-Menu" ],
			[ "Fixed Top Menu", "manual/SSP001JS/Fixed-Top-Menu" ],
			[ "Fullscreen Overlay Nav", "manual/SSP001JS/Fullscreen-Overlay-Nav" ],
			[ "Animated Sidenav", "manual/SSP001JS/Animated-Sidenav" ],
			[ "Sidenav Push", "manual/SSP001JS/Sidenav-Push" ],
			[ "Sidenav", "manual/SSP001JS/Sidenav" ],
			[ "Modal Example", "manual/SSP001JS/Modal-Example" ],
			[ "Bottom Modal", "manual/SSP001JS/Bottom-Modal" ],
			[ "Animated Modal with Header and Footer", "manual/SSP001JS/Animated-Modal-with-Header-and-Footer" ],
			[ "Image Modal", "manual/SSP001JS/Image-Modal" ],
			[ "Image Gallery", "manual/SSP001JS/Image-Gallery" ],
			[ "Image Slide Show", "manual/SSP001JS/Image-Slide-Show" ],
			[ "Image-Slide-Show-auto", "manual/SSP001JS/Image-Slide-Show-auto" ],
			[ "Calculator", "manual/SSP001JS/Calculator" ],
			[ "Popups", "manual/SSP001JS/Popups" ],
			[ "Notes", "manual/SSP001JS/Notes" ],
			[ "PC HTML mp4 Player", "manual/SSP001JS/PC-HTML-mp4-Player" ],
			[ "Android HTML mp4 Player", "manual/SSP001JS/Android-HTML-mp4-Player" ],
			[ "Tabs", "manual/SSP001JS/Tabs" ],
			[ "Todo-list", "manual/SSP001JS/Todo-list" ],
			[ "Tool-tips", "manual/SSP001JS/Tool-tips" ],
			[ "Toggle Switch", "manual/SSP001JS/Toggle-Switch" ],
			[ "Snackbar Toast", "manual/SSP001JS/Snackbar-Toast" ],
			[ "Progress bar", "manual/SSP001JS/Progress-bar" ],
			[ "JS Animation", "manual/SSP001JS/JS-Animation" ],
			[ "Alert Messages", "manual/SSP001JS/Alert-Messages" ],
			[ "Filter List", "manual/SSP001JS/Filter-List" ],
			[ "Popup Login", "manual/SSP001JS/Popup-Login" ],
			[ "Loaders1", "manual/SSP001JS/Loaders1" ],
			[ "Loaders2", "manual/SSP001JS/Loaders2" ],
			[ "Filter Table", "manual/SSP001JS/Filter-Table" ],
			[ "Responsive Pricing Tables", "manual/SSP001JS/Responsive-Pricing-Tables" ],
			[ "Web cam access", "manual/SSP001JS/Web-cam-access" ],
			[ "Draw a triangle", "manual/SSP001JS/draw-a-triangle" ],
			[ "Confirm dialog box", "manual/SSP001JS/Dialog-box-confirm" ],
			[ "Alart dialog box", "manual/SSP001JS/Dialog-box-alart" ],
			[ "Prompt dialog box", "manual/SSP001JS/Dialog-box-prompt" ],
			[ "Paralax", "manual/SSP001JS/Paralax" ],
			[ "Drag And Drop", "manual/SSP001JS/Drag-And-Drop" ]
		],
		"Flash Action Script": [
			[ "Flash Player", "manual/SSP001AS/Flash-Action-Script-Media-Player" ]
		]
	},
	"PYTHON": {
		"Introduction": [
			[ "Introduction To Python", "manual/SSP001Python/Introduction-To-Python" ]
		],
		"Examples": [
			[ "SSP text editer", "manual/SSP001Python/SSP-text-editer" ]
		]
	},
	"MACHINE CODE": {
		"ASM": [
			[ "Introduction", "manual/SSP001ASM/asm1" ]
		]
	},
	"Other notes": {
		"Accounting": [
			[ "Introduction", "manual/SSP001Acc/FINANCIAL-ACCOUNTING" ]
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
