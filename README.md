# Baasic Angular SDK

Baasic Angular library provides integration access to [Baasic REST API](http://dev.baasic.com/api/reference/home) end-points.

## Architecture

With this release, we moved away from [Gulp](http://gulpjs.com/) to even more popular [WebPack](https://webpack.js.org/) bundler, while keeping all Baasic modules inside one Git repository. Angular SDK automatically handles Baasic token storage and similar features.

Since Angular SDK depends on [Baasic JavaScript SDK](https://github.com/Baasic/baasic-sdk-javascript), which is built using TypeScript, it gives us a strongly-typed way of using Angular SDK. Using [TypeScript](https://www.typescriptlang.org/), the inheritance of any Baasic model can be extended - all you need to do is add your properties and save the model using Angular service.

## Setup

To properly configure your solution for using Angular SDK, you will need to add the following line to your `package.config` file:

```javascript
"baasic-sdk-angular": "1.0.0-RC.1",
```

## Initialization

To be able to use the library, add Baasic (`BaasicApp`) dependency to your Angular module:

```javascript
import { BaasicApp } from 'baasic-sdk-angular';
```

## Application Configuration

Baasic Angular SDK library allows you to use a single Baasic application in your Angular modules. To initialize an application, add the following code to your module configuration:

```javascript
@NgModule({
  ...,
  imports: [ 
    ...,
    BaasicApp.forRoot('<api-key>', {
            apiRootUrl: "api.baasic.com",
            apiVersion: "<version>"      
    })
  ],
  ...
})

```

## Usage

In order to use any of the Baasic Angular SDK services, you need to inject them into your service as follows:

```javascript
import { Injectable } from '@angular/core';
import {
    MembershipService,
    IOptions,
    IHttpResponse,
    IBaasicQueryModel,
    IRole
} from 'baasic-sdk-angular';

@Injectable()
export class RoleService {

    constructor(private membershipService: MembershipService) { }

    async getAll(): Promise<IBaasicQueryModel<IRole>> {
        var result = await this.membershipService.role.find();

        return Promise.resolve(result.data);
    }
}
```

## Other

To get more information about the configuration, please visit [Baasic Developer Center](http://dev.baasic.com/sdk#Angular) .

* Help us write the documentation
* Create interesting apps using SDK
* Looking for something else to do? Get in <u>touch</u> ...
