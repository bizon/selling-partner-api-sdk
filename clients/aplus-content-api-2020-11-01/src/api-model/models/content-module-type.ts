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



/**
 * The type of A+ Content module.
 * @export
 * @enum {string}
 */

export const ContentModuleType = {
    StandardCompanyLogo: 'STANDARD_COMPANY_LOGO',
    StandardComparisonTable: 'STANDARD_COMPARISON_TABLE',
    StandardFourImageText: 'STANDARD_FOUR_IMAGE_TEXT',
    StandardFourImageTextQuadrant: 'STANDARD_FOUR_IMAGE_TEXT_QUADRANT',
    StandardHeaderImageText: 'STANDARD_HEADER_IMAGE_TEXT',
    StandardImageSidebar: 'STANDARD_IMAGE_SIDEBAR',
    StandardImageTextOverlay: 'STANDARD_IMAGE_TEXT_OVERLAY',
    StandardMultipleImageText: 'STANDARD_MULTIPLE_IMAGE_TEXT',
    StandardProductDescription: 'STANDARD_PRODUCT_DESCRIPTION',
    StandardSingleImageHighlights: 'STANDARD_SINGLE_IMAGE_HIGHLIGHTS',
    StandardSingleImageSpecsDetail: 'STANDARD_SINGLE_IMAGE_SPECS_DETAIL',
    StandardSingleSideImage: 'STANDARD_SINGLE_SIDE_IMAGE',
    StandardTechSpecs: 'STANDARD_TECH_SPECS',
    StandardText: 'STANDARD_TEXT',
    StandardThreeImageText: 'STANDARD_THREE_IMAGE_TEXT'
} as const;

export type ContentModuleType = typeof ContentModuleType[keyof typeof ContentModuleType];



