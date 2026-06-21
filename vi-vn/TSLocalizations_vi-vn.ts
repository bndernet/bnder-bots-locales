import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_vi_vn {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Thời hạn cho nhiệm vụ **${id}** ${taskTitle}là đến hạn${deadline}trong vùng làm việc${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Bạn đã được giao nhiệm vụ **${id}** ${taskText}trong vùng làm việc${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Tác vụ${id}Đã gán`;
            },
            assigned_embed_footer: "Những thông báo này có thể bị tắt bằng lệnh \"/p tương thích trực tiếp  thông báo\".",
            assigned_embed_button_in_progress: "Đánh dấu trong tiến trình",
            assigned_embed_button_done: "Đánh dấu xong",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Thời hạn cho nhiệm vụ **${id}** ${taskTitle}không gian làm việc quá hạn${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Nhiệm vụ **${id}** ${taskTitle}Bạn được chỉ định làm việc lặp lại và cần phải làm lại trong vùng làm việc${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tác vụ${id}lặp lại`;
            },
            deadline_alert: "Thời hạn tác vụ",
            deadline_duration_due_now: "bây giờ",
            deadline_duration_until(duration: string): string {
                return `in${duration}`;
            },
            deadline_duration_days(days: number): string {
                return `${days}d`;
            },
            deadline_duration_hours(hours: number): string {
                return `${hours}H`;
            },
            deadline_duration_minutes(minutes: number): string {
                return `${minutes}m`;
            },
            commented_embed_title(id: string): string {
                return `Chú thích thêm vào tác vụ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Lời bình luận được thêm vào một công việc trong vùng làm việc${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>) bởi${author}: ${commentText}`;
            },
            comment_response_button: "Đáp ứng lời bình luận",
            stop_followup_reminder_button: "Dừng nhắc nhở theo dõi",
            extend_deadline_by_one_day_button: "Thời hạn mở rộng bởi 1 ngày",
            extend_deadline_by_two_days_button: "Thời hạn mở rộng 2 ngày",
            extend_deadline_by_one_week_button: "Hạn chót mở rộng là 1 tuần",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Anh đã được thêm vào như một người đặt mua dài hạn nhiệm vụ **${id}** ${taskText}trong vùng làm việc${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>) bởi${addedBy}>. Bạn sẽ nhận thông báo khi có gì đó thay đổi trong nhiệm vụ này. Nếu bạn muốn dừng nhận thông báo, bạn có thể nhấn vào nút bên dưới.`;
            },
            subscriber_added_notification_unsubscribe_button: "Hành động",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Nhiệm vụ **${id}** ${taskTitle}[ Chú thích]${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>) đã thay đổi:`
            },
            subscriber_notification_footer: "Tắt thông báo cho nhiệm vụ này bằng lệnh \"/taskSke\"",
            subscriber_embed_title(id: string): string {
                return `Tác vụ${id}Cập nhật`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Giai đoạn quan trọng **${milestoneName}** sẽ đến trong vòng chưa đầy 6 giờ làm việc${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>) và có công việc cần phải hoàn thành.`;
            },
            status_todo: "Todo",
            status_in_progress: "Tiến hành",
            status_done: "Hoàn tất"
        },
        webhookLogging: {
            id_field: "b BAR ",
            deadline_field: "Đường tắt",
            assignees_field: "Gán",
            status_field: "Trạng thái",
            todos_field: "Cần làm",
            delete_at_field: "Xoá( delete)",
            project_field: "Chổi",
            topic_field: "Mục lục",
            text_field: "Văn bản",
            permission_field: "Quyền hạn",
            role_field: "Nhiệm vụ",
            user_field: "Người dùng",
            preset_field: "Định sẵn",
            priority_field: "Ưu tiên",
            type_field: "Kiểu",
            reporter_field: "Phóng viên",
            label_field: "Nhãn",
            manager_field: "Quản lý",
            repeat_interval_field: "Thời lượng lặp lại trong ngày",
            repeat_end_date_field: "Ngày kết thúc lặp lại",
            milestone_field: "Name",
            due_date_field: "Ngày",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "Tiến hành";
                    case 2:
                        return "Hoàn tất";
                    default:
                        return "Không rõ";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Comment${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Thời hạn cho nhiệm vụ **${id}** sắp đến hạn rồi${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tác vụ${id}Đã xóa.`;
                },
                description(id: string): string {
                    return `Tác vụ${id}đã bị xóa.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tác vụ${id}lặp lại.`;
                },
                description(id: string): string {
                    return `Tác vụ${id}được lặp đi lặp lại và nhà nước được thiết lập để thực hiện.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tác vụ${id}tạo ra.`;
                },
                description(task_text: string, id: string): string {
                    return `Tác vụ${id}đã được tạo với văn bản:${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tác vụ${id}Cập nhật.`;
                },
                description(id: string): string {
                    return `Tác vụ${id}đã cập nhật và những dữ liệu sau đã được thay đổi.`;
                }
            },
            ticket_created: {
                title(id: string): string {
                    return `Vé${id}tạo`;
                }
            },
            ticket_updated: {
                title(id: string): string {
                    return `Vé${id}Cập nhật`;
                }
            },
            ticket_deleted: {
                title(id: string): string {
                    return `Vé${id}Đã xoá`;
                }
            },
            project_created: {
                title: "Dự án đã tạo",
                description(projectName: string): string {
                    return `Chổi${projectName}đã được tạo`;
                }
            },
            project_deleted: {
                title: "Dự án đã được xóa",
                description(projectName: string): string {
                    return `Chổi${projectName}đã xoá`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Tác vụ${id}Trạng thái thay đổi`;
                }
            },
            permission_granted: {
                title: "Cho phép",
            },
            permission_revoked: {
                title: "Name",
            },
            preset_applied: {
                title: "Định sẵn đã áp dụng",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Comment${id}quá hạn`;
                }
            },
            project_updated: {
                title: "Dự án cập nhật",
                description(name: string): string {
                    return `Chổi${name}đã được cập nhật`;
                }
            },
            test_message: {
                title: "Đây là tin nhắn thử",
                description: "Nếu bạn thấy thông điệp này, lưỡi câu web hoạt động đúng và việc ghi nhật ký được bật."
            },
            comment_added: {
                title(id: string): string {
                    return `Chú thích thêm vào tác vụ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Chú thích${id}`;
                }
            },
            topic_created: {
                title: "Đã tạo mục lục",
                description(name: string): string {
                    return `Mục lục${name}đã được tạo`;
                }
            },
            topic_updated: {
                title: "Cập nhật Nội dung",
                description(name: string): string {
                    return `Mục lục${name}đã được cập nhật`;
                }
            },
            topic_deleted: {
                title: "Thư mục đã được xoá",
                description(name: string): string {
                    return `Mục lục${name}đã xoá`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Tài liệu${id}tạo`;
                },
                description(name: string): string {
                    return `Tài liệu${name}đã được tạo`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Tài liệu${id}Cập nhật`;
                },
                description(name: string): string {
                    return `Tài liệu${name}đã được cập nhật`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Tài liệu${id}Đã xoá`;
                },
                description(name: string): string {
                    return `Tài liệu${name}đã xoá`;
                }
            },
            label_created: {
                title: "Nhãn được tạo",
                description(name: string): string {
                    return `Nhãn${name}đã được tạo`;
                }
            },
            label_updated: {
                title: "Nhãn đã cập nhật",
                description(name: string): string {
                    return `Nhãn${name}đã được cập nhật`;
                }
            },
            label_deleted: {
                title: "Nhãn đã được xoá",
                description(name: string): string {
                    return `Nhãn${name}đã xoá`;
                }
            },
            attachments_field: "Gắn kết",
            milestone_created: {
                title: "Name",
            },
            milestone_updated: {
                title: "Cập nhật Milestone",
            },
            milestone_deleted: {
                title: "Name",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `Comment${id}) **${name}** đang bắt đầu${durationTillEventMinutes}phút${startTime}trong [${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Bạn đã được mời tham dự sự kiện${eventId}by${inviterId}>: **${eventName}** Bắt đầu từ${start}và kết thúc tại${end}Mọi ngày được tính theo${timezone}. Hãy dùng\ / Dàn xếp múi giờ\" để thay đổi múi giờ cho toàn bộ vùng làm việc, hoặc \"/p tương thích múi giờ\" để thay đổi chính mình.`;
                },
                accept_button: "Chấp nhận",
                deny_button: "Từ chối"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> Cập nhật sự kiện${eventId}: **${eventName}** Bắt đầu từ${start}và kết thúc tại${end}Mọi ngày được tính theo${timezone}. Hãy dùng\ / Dàn xếp múi giờ\" để thay đổi múi giờ cho toàn bộ vùng làm việc, hoặc \"/p tương thích múi giờ\" để thay đổi chính mình.`
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `Anh đặt phòng${workspaceName}bắt đầu về${durationTillEventMinutes}phút${start} - ${end}, ${timezone}).${location}`;
                },
                title: "Lời nhắc nhở hẹn tới",
                manage_bookings_button: "Quản lý đặt chỗ",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Bạn đã được chỉ định chỗ làm việc${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>). Bây giờ bạn có quyền truy cập các tính năng bao gồm trong  BR0   hoặc  BR1  ghế.`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `Người dùng **${requesterUsername}** đã yêu cầu một chỗ làm lương${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>). Quản trị vùng làm việc có thể gán bất kỳ  BR0      hay  P1  chỗ bằng cái nút bên dưới. Nếu không gian làm việc cần thêm chỗ ngồi, hãy ghé thăm [những thiết lập không gian làm việc] [https vội vã.net/app/ cons/${guildId}Để mua chỗ ngồi.`;
        },
        request_pro_seat_button_label: "Grant trả tiền chỗ ngồi",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# Cần hành động: Trả tiền thất bại vì phục vụ ở biển
Chúng tôi không thể xử lý việc thanh toán một hoặc nhiều hơn  BAR hoặc   BAR  ghế trên [${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>). Để tránh mất quyền truy cập thực phẩm, xin vui lòng [ cập nhật thông tin thanh toán và thanh toán hóa đơn ngay bây giờ]${customerPortalLink}>).

Nếu không có hành động, ghế ngồi có ảnh hưởng sẽ ngừng đóng góp ngay.

Cần giúp không? Chúng tôi ở đây vì các bạn.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Tập tin **${fileName}** được chia sẻ với bạn trong không gian làm việc [${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>) bởi${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Thư mục **.${folderName}** được chia sẻ với bạn trong không gian làm việc [${guildName}(<htps tảng băng ghi âm.com/Graps/${guildId}>) bởi${userId}>`;
            }
        },
        self_data_download_ready: "Dữ liệu của bạn đã sẵn sàng để tải về. Bạn có thể tải nó xuống [ Ứng dụng của chúng tôi] [https vội vã.net/app/>. Liên kết tải về sẵn sàng trong hai tuần.",
        tutorial_tasks: {
            tutorial_label_name: "Hướng dẫn",
            create_first_task_title: "Tạo tác vụ đầu tiên",
            create_first_task_description: "Bắt đầu bằng việc tạo ra một nhiệm vụ. Cho nó một cái tên và mô tả tùy ý.",
            change_task_status_title: "Thay đổi trạng thái tác vụ",
            change_task_status_description: "Thay đổi trạng thái của một tác vụ thành « Tiến hành » hay « Thoát » bằng cách kéo nó vào mỗi cột.",
            invite_team_members_title: "Mời các thành viên trong đội",
            invite_team_members_description: "Mời các thành viên tham gia vào không gian làm việc. Họ sẽ thấy lời mời trong thiết lập người dùng.",
            explore_workspace_title: "Khám phá không gian làm việc",
            explore_workspace_description: "Khám phá không gian làm việc và làm quen với các tính năng. Bạn có thể tạo ra công việc, quản lý thành viên, và nhiều hơn nữa. Bạn cũng có thể xem lại các thiết lập để điều chỉnh định dạng ngày tháng, ngôn ngữ và múi giờ."
        },
        mails: {
            footer: {
                company_limited_liability: "giới hạn công ty trách nhiệm (góm)",
                company_address: "Im Flath 12 - 35542 Leiferde - Đức",
                company_register_court: "Tòa án quận Hildesheim (Đức) - HRB 209373",
                company_ceo: "Jan Brinkmann",
                company_contact: "Thư: liên lạc",
                legal_automated_email: "Đây là một email tự động. Xin đừng trả lời email này.",
                legal_privacy_policy_prefix: "Xin vui lòng đọc chính sách cá nhân của chúng tôi tại",
                legal_imprint: "In ấn",
                legal_terms_of_use: "Điều kiện dùng",
                legal_privacy_policy: "Chính sách riêng tư",
            },
            verify_email: {
                headline: "Kiểm tra địa chỉ email của bạn",
                text: "Vui lòng xác nhận địa chỉ email bằng cách nhắp vào liên kết bên dưới.",
                primaryActionText: "Kiểm tra Email",
            },
            password_changed: {
                headline: "Comment",
                text: "Mật khẩu của bạn đã được thay đổi. Nếu bạn chưa khởi động sự thay đổi này, hãy liên lạc ngay khi liên lạc với@bder.net",
            },
            reset_password: {
                headline: "Đặt lại mật khẩu",
                text: "Để đặt lại mật khẩu, hãy nhấn vào nút bên dưới. Nếu bạn không yêu cầu đặt lại mật khẩu, hãy bỏ qua thư điện tử này.",
                primaryActionText: "Đặt lại mật khẩu",
            },
            workspace_invitation: {
                headline: "Giấy mời không gian làm việc",
                text(workspaceName: string): string {
                    return `Bạn đã được mời tham gia vào không gian lao động${workspaceName}. Hãy nhắp vào cái nút bên dưới để chấp nhận lời mời và nhập vào không gian làm việc.`;
                },
                invitedBy(inviterLabel: string): string {
                    return `Mời bởi:${inviterLabel}`;
                },
                primaryActionText: "Vào vùng làm việc",
            },
            task_assigned: {
                subject: "Bạn đã được giao nhiệm vụ mới",
                greeting(guildName: string): string {
                    return `Bạn đã được phân công trong vùng làm việc${guildName}.`;
                },
                no_deadline: "Không có thời hạn cho nhiệm vụ này.",
                open_in_app: "Mở trong ứng dụng",
            },
            primaryPasteActionLinkText: "Hoặc dán liên kết bên dưới vào trình duyệt của bạn:",
            task_subscriber: {
                added_subject: "Anh được thêm vào là người đặt mua dài hạn một nhiệm vụ.",
                subscriber_added(guildName: string): string {
                    return `Bạn đã được thêm vào như là một người theo dõi một công việc trong không gian làm việc${guildName}Bạn sẽ nhận thông báo khi có gì đó thay đổi trong nhiệm vụ này.`;
                },
                subject: "Thông báo cập nhật tác vụ",
                activity(guildName: string): string {
                    return `Một công việc bạn được đặt mua trong không gian làm việc${guildName}Đã thay đổi.`;
                }
            },
            self_data_download_ready: {
                headline: "Dữ liệu của bạn đã sẵn sàng tải về",
                text: "Chúng tôi đã chuẩn bị dữ liệu để tải về. Bạn có thể truy cập vào ứng dụng. Liên kết tải về sẵn sàng trong hai tuần.",
            },
            payment_failed: {
                headline: "▪ Cần hành động: Trả tiền thất bại vì phục vụ ở biển",
                text(guildName: string): string {
                    return `Chúng tôi không thể xử lý việc thanh toán cho một hay nhiều  BAR hoặc     BAR  ghế trên${guildName}Để tránh mất quyền truy cập thực phẩm, xin hãy cập nhật thông tin thanh toán và trả hóa đơn ngay. Nếu không có hành động, ghế ngồi có ảnh hưởng sẽ ngừng đóng góp ngay. Cần giúp không? Sự hỗ trợ của bạn — chúng tôi ở đây vì bạn.`;
                },
                primaryActionText: "Cập nhật thông tin chi trả"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "Vé mới:",
                subject_prefix_update: "Cập nhật vé:",
                subject_prefix_sla_warning: "Vé  BR0  Cảnh báo:",
                subject_prefix_status(statusLabel: string): string {
                    return `Vé${statusLabel}:`;
                },
                body_created: "Một vé mới đã được tạo ra.",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `Name${ticketTitle}\n\n\nMessage xem thử:${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `Trạng thái vé đã đổi thành\ "${statusLabel}\.\n\n\n bộ nhớ:${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `Vé đã tự động đóng, vì không nhận được hồi âm của phóng viên trong cửa sổ đã cấu hình thời gian.\n\n\ tocket:${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `Ô này đã tới ngưỡng cảnh báo.\n\nitet:${ticketTitle}\nSLA:${slaName}\ độ tuổi hiện tại:${currentAge}\nTarget:${targetAge}`;
                },
                reporter_delivery_failed_note(failedRecipient: string): string {
                    return `Gửi thư cho phóng viên${failedRecipient}bị lỗi. Có lẽ phóng viên chưa nhận được bản cập nhật vé mới nhất.`;
                },
                reporter_delivery_failed_status(status: string): string {
                    return `Trạng thái:${status}`;
                },
                reporter_delivery_failed_diagnostic(diagnostic: string): string {
                    return `Chẩn đoán:${diagnostic}`;
                },
                reporter_delivery_failed_original_subject(originalSubject: string): string {
                    return `Chủ đề gốc:${originalSubject}`;
                },
                subject_prefix_sla_breach(stepLabel: string): string {
                    return `Vé  BR0  Phá vỡ:${stepLabel}`;
                },
                headline_sla_breach(ticketTitle: string): string {
                    return `b BAR  Phá vỡ:${ticketTitle}`;
                },
                body_sla_breach(slaName: string, stepLabel: string, currentAge: string, targetAge: string): string {
                    return `BR0 "${slaName}"Đã xâm phạm${stepLabel}.\n độ tuổi hiện tại:${currentAge}\nTarget:${targetAge}.`;
                },
                sla_step_first_response: "phản ứng đầu tiên",
                sla_step_next_response: "câu trả lời tiếp theo",
                sla_step_resolution: "Độ phân giải",
                action_open_ticket: "Mở thẻ",
                action_reply_to_ticket: "Trả lời bảng chọn",
                action_unsubscribe: "Hung thủ đăng ký từ vé này",
                footer_brand_context(displayName: string): string {
                    return `Đã gửi${displayName}thông qua  BR0.`;
                },
                footer_brand_context_link_prefix(displayName: string): string {
                    return `Đã gửi${displayName}qua`;
                },
                footer_brand_context_link_suffix(): string {
                    return ".";
                },
                unknown_inbox_subject: "Địa chỉ hộp thư không rõ",
                unknown_inbox_headline: "Địa chỉ hộp thư không rõ",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `Chúng tôi nhận được email của bạn${recipientAddress}Nhưng địa chỉ hộp thư này không được cấu hình cho việc nhập vé. Không có vé nào được tạo.\n\n\n  vui lòng liên lạc với nhóm hỗ trợ của bạn và yêu cầu địa chỉ email riêng của dự án.`;
                },
                unknown_inbox_text_without_recipient: "Chúng tôi nhận được email của anh, nhưng địa chỉ hộp thư này không được cấu hình cho việc nhập vé. Không có vé nào được tạo ra.\n\nVui lòng liên lạc với đội hỗ trợ và yêu cầu địa chỉ email của dự án.",
                feature_locked_subject: "Tính năng thư điện tử cần thiết  BR0 ",
                feature_locked_headline: "Tính năng thư điện tử cần thiết  BR0 ",
                feature_locked_text: "Chúng tôi đã nhận được thư điện tử của bạn, nhưng trả lời từng email cho vé có sẵn trên  BR0 spaces chỉ. Câu trả lời của anh không được thêm vào vé.\n\nVui lòng liên lạc với đội hỗ trợ của bạn và yêu cầu họ nâng cấp không gian làm việc để  BR1 .",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `Vé mới trong dự án${projectId}: ${ticketTitle}`;
                },
                project_member_headline: "Một vé mới đã được tạo ra",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `Một tấm vé mới được tạo ra trong dự án${projectId}\n\n bitet:${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `Một tấm vé mới được tạo ra trong dự án **${projectId}**.\nitet: [${ticketTitle}](<${ticketUrl}>)\nID:\${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `Câu trả lời của bạn đã được thêm vào cuộc đối thoại vé.\n\nitet:${ticketTitle}`;
                },
                subject_assigned(ticketTitle: string): string {
                    return `Bạn đã được chỉ định để vé:${ticketTitle}`;
                },
                headline_assigned(ticketTitle: string): string {
                    return `Anh được chỉ định đến...${ticketTitle}"`;
                },
                body_assigned(ticketTitle: string): string {
                    return `Anh được chỉ định vào vé."${ticketTitle}".`;
                },
                subject_reassigned(ticketTitle: string): string {
                    return `Chuyển đổi vé cho bạn:${ticketTitle}`;
                },
                headline_reassigned(ticketTitle: string): string {
                    return `Chuyển đổi vé cho bạn:${ticketTitle}`;
                },
                body_reassigned(ticketTitle: string): string {
                    return `Bây giờ anh phải chịu trách nhiệm về vé."${ticketTitle}".`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**Bạn được chỉ định "${ticketTitle}"** Bạn đã được chỉ định vào vé."${ticketTitle}".\n\n\n[ vé mở ra](<i>${ticketUrl}>)\nID:\${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `** Bộ nhớ lại:${ticketTitle}**\n bạn bây giờ chịu trách nhiệm về vé "${ticketTitle}".\n\n\n[ vé mở ra](<i>${ticketUrl}>)\nID:\${ticketId}\``;
                },
                subject_assignee_reporter_update(ticketTitle: string): string {
                    return `Cập nhật phóng viên trên vé được chỉ định:${ticketTitle}`;
                },
                headline_assignee_reporter_update(ticketTitle: string): string {
                    return `Phóng viên cập nhật trong...${ticketTitle}"`;
                },
                discord_dm_assignee_reporter_update(ticketTitle: string, notificationText: string, ticketUrl: string, ticketId: string): string {
                    return `Cập nhật phóng viên trên vé được chỉ định."${ticketTitle}".\n${notificationText}\n\n\n[ vé mở](<${ticketUrl}>)\nID:\${ticketId}\``;
                },
                subject_mentioned(ticketTitle: string): string {
                    return `Đề tài trong vé:${ticketTitle}`;
                },
                headline_mentioned(ticketTitle: string): string {
                    return `Anh được nhắc đến trong "${ticketTitle}"`;
                },
                body_mentioned(messagePreview: string): string {
                    return `Xem thử thông điệp:${messagePreview}`;
                },
                discord_dm_mentioned(ticketTitle: string, messagePreview: string, ticketUrl: string, ticketId: string): string {
                    return `Anh được nhắc đến trong vé."${ticketTitle}"...nPreview:${messagePreview}\n\n\n[ vé mở](<${ticketUrl}>)\nID:\${ticketId}\``;
                },
            },

            open_app: "Phụ mở",
        }
    }
}
