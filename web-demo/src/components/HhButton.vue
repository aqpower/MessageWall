<template>
    <button :class="[size,nom]" class="hh-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        size: {
            default: 'base',
        },
        nom: {
            default: 'primary',
        }
    }
}
</script>

<style lang="less" scoped>
.hh-button {
    text-align: center;
    border: none;
    cursor: pointer;
}

// size
.max {
    min-width: 100px;
    height: 48px;
    border-radius: 24px;
    padding: 0 24px;
}

.base {
    min-width: 80px;
    height: 36px;
    border-radius: 24px;
    padding: 0 20px;
}

.small {
    min-width: 72px;
    height: 32px;
    border-radius: 24px;
    padding: 0 20px;
}
// nom
.primary{
    background: @gray-1;
    color: @gray-10;
}
.secondary{
    background: none;
    color: @gray-1;
    border: 1px solid @gray-1;
}
.cprimary {
    background: @primary-color;
    color: @gray-10;
    font-weight: 600;
}
.csecondary{
    background: @gray-10;
    color: @gray-1;
}
</style>