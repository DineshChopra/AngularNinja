Angular CLI Commands
	Q: How to install Angular-cli 
	A: npm install -g angular-cli 
	
	Q: How to update Angular-CLI 
	A: Please follow the below steps
			1: npm uninstall -g angular-cli @angular/cli
			2: npm cache clean
			3: npm install -g @angular/cli 
	
	Q: How to add Bootstrap and bootstrap like framework 
	A: npm install --save bootstrap 
	
	Q: How to install pakcage.json 
	A: npm install 
	
	Q: How to start project on node server/ How to start dependency servers 
	A: ng serve 
	
	Q: How to change default port of node server 
	A: ng serve --port 8090(your port)

CLI Commands For New Project
	Q: How to create New Project using CLI 
	A: ng new project-name

CLI Commands For New Component
	Q: How to add new component using CLI with new folder 
	A: ng generate component component-name
		 or
		 ng g c component-name
	
	Q: How to create component using CLI without creating new folder 
	A: ng generate component component-name --flat
		 or
		 ng g c component-name --flat
	
	Q: How to create inline HTML template using CLI 
	A: ng generate component component-name --flat --inline-template
		 or
		 ng g c component-name --flat -- it
	
	Q: How to create inline STYLE-CSS  using CLI 
	A: ng generate component component-name --flat --inline-styles
		 or
		 ng g c component-name --flat -- is
	
	Q: How to restrict to create test (.spec) file using CLI. 
	A: ng generate component component-name --spec false
		 or
		 ng g c component-name --spec false

CLI Commands For New Directive
	Q: How to create Directive Using CLIA: ng generate directive directive-name
		 or
		 ng g d directive-name