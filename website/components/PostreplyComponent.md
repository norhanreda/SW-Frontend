# PostreplyComponent

## Props

<!-- @vuese:PostreplyComponent:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|message|details of message|`Object`|`true`|{"id":"","text":"","type":"","senderUsername":"","receiverUsername":"","subredditName":"","postTitle":"","subject":"","sendAt":"","isReply":"","isRead":""}|
|count|counter to handle background color|`Number`|`true`|1|
|index|index to handle unique ids|`Number`|`true`|0|

<!-- @vuese:PostreplyComponent:props:end -->


## Methods

<!-- @vuese:PostreplyComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|removeAction|toggle remove action|-|
|blockAction|handle block action|-|
|spamAction|handle spam action|-|
|upvote|handle upvote action|-|
|downvote|handle downvote action|-|
|unreadAction|handle unread action|-|

<!-- @vuese:PostreplyComponent:methods:end -->

