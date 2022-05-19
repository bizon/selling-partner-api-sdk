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


import { ImageDimensions } from './image-dimensions';
import { ImageOffsets } from './image-offsets';

/**
 * The instructions for optionally cropping an image. If no cropping is desired, set the dimensions to the original image size. If the image is cropped and no offset values are provided, then the coordinates of the top left corner of the cropped image, relative to the original image, are defaulted to (0,0).
 * @export
 * @interface ImageCropSpecification
 */
export interface ImageCropSpecification {
    /**
     * 
     * @type {ImageDimensions}
     * @memberof ImageCropSpecification
     */
    'size': ImageDimensions;
    /**
     * 
     * @type {ImageOffsets}
     * @memberof ImageCropSpecification
     */
    'offset'?: ImageOffsets;
}

