<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/19582642?s=40&v=4">
						<div class="mui-media-body">
                            <h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间: 2012-12 12:12:12</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
        <h1> 新闻列表</h1>
    </div>
</template>
<script>
    
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size:14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>