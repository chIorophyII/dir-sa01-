// 한줄평 남기기 //
let titleBucket = '';

function readTitle() {
  // title 저장을 위한 변수 선언
  const details = document.querySelectorAll('.modal_detailView');

  details.forEach(function (modal_detailView) {
    details.addEventListener('click', clickDetail);
  });

  function clickDetail(e) {
    let identify = e.currentTarget.getAttribute('data-bs-whatever');
    // titleBucket에 title값을 넣어줍니다
    titleBucket = identify;
  }
}

function com_post(targetItemID) {
    let com = $("#textarea-post").val()
    let today = new Date().toISOString()
    let identify = titleBucket;

    if (com == "") {
        alert("후기를 입력해주세요!")
        return;
    }

    $.ajax({
        type: "POST",
        url: "/item/comment",
        data: {
            com_give: com,
            date_give: today,
            target_item_id_give: targetItemID

        },
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}

  function post_comment(targetItemId) {
                let comment = $("#userComment").val()
                let post_id = targetItemId
                console.log(post_id)
                $.ajax({
                    type: "POST",
                    url: "/posting",
                    data: {
                        comment_give: comment,
                        targetitemid_give:post_id
                    },
                    success: function (response) {
                        alert(response.result)
                        window.location.reload()
                    }
                })
            }

function get_posts(itemid) {
    $("#comment_box").empty()

    $.ajax({
        type: "POST",
        url: `/get_posts`,
        data: {
            item_id_give: itemid,
        },
        success: function (response) {
            let posts = response["posts"]

        }
    })
}

function time2str(date) {
    let today = new Date()
    let time = (today - date) / 1000 / 60  // 분

    if (time < 60) {
        return parseInt(time) + "분 전"
    }
    time = time / 60  // 시간
    if (time < 24) {
        return parseInt(time) + "시간 전"
    }
    time = time / 24
    if (time < 7) {
        return parseInt(time) + "일 전"
    }
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}