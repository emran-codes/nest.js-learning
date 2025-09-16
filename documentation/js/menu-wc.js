'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">learn-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' : 'data-bs-target="#xs-controllers-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' :
                                            'id="xs-controllers-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' : 'data-bs-target="#xs-injectables-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' :
                                        'id="xs-injectables-links-module-AppModule-09c429621e4526f25a4b51f48cabe7511829a682a0c5a8be316152843f884ed36a205fda9ec953ec01cf199ecc089fa232051937b8b09464ccf664cc38ae8521"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-dbf4104920713a1b35e23769018601d623f064bf9e529c1383e50e72eaf685bb78ebcbdd21970b27a8bcf83837f491344cf9743acaa942e52141606426e184fb"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-dbf4104920713a1b35e23769018601d623f064bf9e529c1383e50e72eaf685bb78ebcbdd21970b27a8bcf83837f491344cf9743acaa942e52141606426e184fb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-dbf4104920713a1b35e23769018601d623f064bf9e529c1383e50e72eaf685bb78ebcbdd21970b27a8bcf83837f491344cf9743acaa942e52141606426e184fb"' :
                                            'id="xs-controllers-links-module-AuthModule-dbf4104920713a1b35e23769018601d623f064bf9e529c1383e50e72eaf685bb78ebcbdd21970b27a8bcf83837f491344cf9743acaa942e52141606426e184fb"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AuthServiceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthServiceController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' :
                                            'id="xs-controllers-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' :
                                        'id="xs-injectables-links-module-PostsModule-d7620f0f6cd51997f33a9f64e1c694778b1405c336399d8600b383626c20e22f9fb2246dbc12c3cceb1d44c70492df45cc99a3c1442c880331cbc37f7d72036d"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' :
                                            'id="xs-controllers-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' :
                                        'id="xs-injectables-links-module-UsersModule-cae0661631c904f4edb0b1904e99826c382c9af859f6b189db2c6dfdf8cff84395c9a59219d06a933e198ccb6709874be13cfb1d3ba923e5e666b7108c01fafd"' }>
                                        <li class="link">
                                            <a href="injectables/UserServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthServiceController.html" data-type="entity-link" >AuthServiceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MetaOptions.html" data-type="entity-link" >MetaOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserParam.html" data-type="entity-link" >UserParam</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserServices.html" data-type="entity-link" >UserServices</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});