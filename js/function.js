$(function () {
	const $icon = $('.slides-button a');
	const $container = $('.slides-container>ul');

	let nowIdx = 0;

	$icon.on('click', function () {
		nowIdx = $icon.index(this);

		$container.animate({ left: -100 * nowIdx + '%' });

		$icon.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	});

	$('.next').on('click', function () {
		if (nowIdx < $icon.length - 1) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		$container.animate({ left: -100 * nowIdx + '%' });

		$icon.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	});
	$('.prev').on('click', function () {
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = $icon.length - 1;
		}

		$container.animate({ left: -100 * nowIdx + '%' });

		$icon.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	});
});
