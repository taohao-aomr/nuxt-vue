<template>
    <div>
        <h1>欢迎来到浩师傅的列表页面</h1>
        <ListItem></ListItem>
        <ClientOnly>
            <!-- 此组件仅在客户端显示 -->
            <Comments />
        </ClientOnly>
    </div>
  </template>
  