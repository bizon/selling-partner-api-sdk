/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for CustomerFeedback
 * The Selling Partner API for Customer Feedback (Customer Feedback API) provides information about customer reviews and returns at both the item and browse node level.
 *
 * The version of the OpenAPI document: 2024-06-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BrowseNodeReviewTrend } from './browse-node-review-trend';

/**
 * The 10 most positive and most negative review topics for all items in a browse node.
 * @export
 * @interface BrowseNodeReviewTrends
 */
export interface BrowseNodeReviewTrends {
    /**
     * The trends of the most positive review topics. The percentage of reviews that contain the topic across all products in the requested browse node determine the topic\'s placement in the list. This value is `null` if there aren\'t enough positive reviews for the requested browse node.  **Max length:** 10
     * @type {Array<BrowseNodeReviewTrend>}
     * @memberof BrowseNodeReviewTrends
     */
    'positiveTopics'?: Array<BrowseNodeReviewTrend>;
    /**
     * The trends of the most negative review topics. The percentage of reviews that contain the topic across all products in the requested browse node determine the topic\'s placement in the list. This value is `null` if there aren\'t enough positive reviews for the requested browse node.  **Max length:** 10
     * @type {Array<BrowseNodeReviewTrend>}
     * @memberof BrowseNodeReviewTrends
     */
    'negativeTopics'?: Array<BrowseNodeReviewTrend>;
}

