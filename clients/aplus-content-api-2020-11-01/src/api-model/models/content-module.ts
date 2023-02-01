/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ContentModuleType } from './content-module-type';
// May contain unused imports in some cases
// @ts-ignore
import { StandardCompanyLogoModule } from './standard-company-logo-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardComparisonTableModule } from './standard-comparison-table-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardFourImageTextModule } from './standard-four-image-text-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardFourImageTextQuadrantModule } from './standard-four-image-text-quadrant-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardHeaderImageTextModule } from './standard-header-image-text-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardImageSidebarModule } from './standard-image-sidebar-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardImageTextOverlayModule } from './standard-image-text-overlay-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardMultipleImageTextModule } from './standard-multiple-image-text-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardProductDescriptionModule } from './standard-product-description-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardSingleImageHighlightsModule } from './standard-single-image-highlights-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardSingleImageSpecsDetailModule } from './standard-single-image-specs-detail-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardSingleSideImageModule } from './standard-single-side-image-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardTechSpecsModule } from './standard-tech-specs-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardTextModule } from './standard-text-module';
// May contain unused imports in some cases
// @ts-ignore
import { StandardThreeImageTextModule } from './standard-three-image-text-module';

/**
 * An A+ Content module. An A+ Content document is composed of content modules. The contentModuleType property selects which content module types to use.
 * @export
 * @interface ContentModule
 */
export interface ContentModule {
    /**
     * 
     * @type {ContentModuleType}
     * @memberof ContentModule
     */
    'contentModuleType': ContentModuleType;
    /**
     * 
     * @type {StandardCompanyLogoModule}
     * @memberof ContentModule
     */
    'standardCompanyLogo'?: StandardCompanyLogoModule;
    /**
     * 
     * @type {StandardComparisonTableModule}
     * @memberof ContentModule
     */
    'standardComparisonTable'?: StandardComparisonTableModule;
    /**
     * 
     * @type {StandardFourImageTextModule}
     * @memberof ContentModule
     */
    'standardFourImageText'?: StandardFourImageTextModule;
    /**
     * 
     * @type {StandardFourImageTextQuadrantModule}
     * @memberof ContentModule
     */
    'standardFourImageTextQuadrant'?: StandardFourImageTextQuadrantModule;
    /**
     * 
     * @type {StandardHeaderImageTextModule}
     * @memberof ContentModule
     */
    'standardHeaderImageText'?: StandardHeaderImageTextModule;
    /**
     * 
     * @type {StandardImageSidebarModule}
     * @memberof ContentModule
     */
    'standardImageSidebar'?: StandardImageSidebarModule;
    /**
     * 
     * @type {StandardImageTextOverlayModule}
     * @memberof ContentModule
     */
    'standardImageTextOverlay'?: StandardImageTextOverlayModule;
    /**
     * 
     * @type {StandardMultipleImageTextModule}
     * @memberof ContentModule
     */
    'standardMultipleImageText'?: StandardMultipleImageTextModule;
    /**
     * 
     * @type {StandardProductDescriptionModule}
     * @memberof ContentModule
     */
    'standardProductDescription'?: StandardProductDescriptionModule;
    /**
     * 
     * @type {StandardSingleImageHighlightsModule}
     * @memberof ContentModule
     */
    'standardSingleImageHighlights'?: StandardSingleImageHighlightsModule;
    /**
     * 
     * @type {StandardSingleImageSpecsDetailModule}
     * @memberof ContentModule
     */
    'standardSingleImageSpecsDetail'?: StandardSingleImageSpecsDetailModule;
    /**
     * 
     * @type {StandardSingleSideImageModule}
     * @memberof ContentModule
     */
    'standardSingleSideImage'?: StandardSingleSideImageModule;
    /**
     * 
     * @type {StandardTechSpecsModule}
     * @memberof ContentModule
     */
    'standardTechSpecs'?: StandardTechSpecsModule;
    /**
     * 
     * @type {StandardTextModule}
     * @memberof ContentModule
     */
    'standardText'?: StandardTextModule;
    /**
     * 
     * @type {StandardThreeImageTextModule}
     * @memberof ContentModule
     */
    'standardThreeImageText'?: StandardThreeImageTextModule;
}



