import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_vi_VN {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Hạn chót của tác vụ **${id}** ${taskTitle} sẽ đến hạn vào ${deadline} trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Bạn đã được giao tác vụ **${id}** ${taskText} trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Đã giao tác vụ ${id}`;
            },
            assigned_embed_footer: "Bạn có thể tắt các thông báo này bằng lệnh \"/preferences direct_messages\".",
            assigned_embed_button_in_progress: "Đánh dấu là đang thực hiện",
            assigned_embed_button_done: "Đánh dấu là hoàn tất",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Hạn chót của tác vụ **${id}** ${taskTitle} đã quá hạn trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Tác vụ **${id}** ${taskTitle} mà bạn được giao đã được lặp lại và cần được thực hiện lại trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tác vụ ${id} đã được lặp lại`;
            },
            deadline_alert: "Hạn chót tác vụ",
            deadline_duration_due_now: "đến hạn ngay",
            deadline_duration_until(duration: string): string {
                return `trong ${duration}`;
            },
            deadline_duration_days(days: number): string {
                return `${days} ngày`;
            },
            deadline_duration_hours(hours: number): string {
                return `${hours} giờ`;
            },
            deadline_duration_minutes(minutes: number): string {
                return `${minutes} phút`;
            },
            commented_embed_title(id: string): string {
                return `Đã thêm bình luận vào tác vụ ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Một bình luận đã được thêm vào tác vụ trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>) bởi ${author}: ${commentText}`;
            },
            comment_response_button: "Trả lời bình luận",
            stop_followup_reminder_button: "Dừng nhắc nhở theo dõi",
            extend_deadline_by_one_day_button: "Gia hạn hạn chót thêm 1 ngày",
            extend_deadline_by_two_days_button: "Gia hạn hạn chót thêm 2 ngày",
            extend_deadline_by_one_week_button: "Gia hạn hạn chót thêm 1 tuần",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Bạn đã được thêm làm người theo dõi tác vụ **${id}** ${taskText} trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>) bởi <@${addedBy}>. Bạn sẽ nhận được thông báo khi có thay đổi trong tác vụ này. Nếu không muốn nhận thông báo nữa, bạn có thể nhấp vào nút bên dưới.`;
            },
            subscriber_added_notification_unsubscribe_button: "Hủy theo dõi",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Tác vụ **${id}** ${taskTitle} mà bạn đang theo dõi trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>) đã thay đổi:`
            },
            subscriber_notification_footer: "Tắt thông báo cho tác vụ này bằng lệnh \"/task unsubscribe\"",
            subscriber_embed_title(id: string): string {
                return `Tác vụ ${id} đã được cập nhật`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Cột mốc **${milestoneName}** sẽ đến hạn trong chưa đầy 6 giờ trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>) và có các tác vụ cần hoàn tất.`;
            },
            status_todo: "Cần làm",
            status_in_progress: "Đang thực hiện",
            status_done: "Hoàn tất"
        },
        webhookLogging: {
            id_field: "ID",
            deadline_field: "Hạn chót",
            assignees_field: "Người được giao",
            status_field: "Trạng thái",
            todos_field: "Việc cần làm",
            delete_at_field: "Xóa vào",
            project_field: "Dự án",
            topic_field: "Chủ đề",
            text_field: "Nội dung",
            permission_field: "Quyền",
            role_field: "Vai trò",
            user_field: "Người dùng",
            preset_field: "Cài đặt sẵn",
            priority_field: "Ưu tiên",
            type_field: "Loại",
            reporter_field: "Người báo cáo",
            label_field: "Nhãn",
            manager_field: "Quản lý",
            repeat_interval_field: "Khoảng lặp lại theo ngày",
            repeat_end_date_field: "Ngày kết thúc lặp lại",
            milestone_field: "Cột mốc",
            due_date_field: "Ngày đến hạn",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Cần làm";
                    case 1:
                        return "Đang thực hiện";
                    case 2:
                        return "Hoàn tất";
                    default:
                        return "Không xác định";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Hạn chót của tác vụ ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Hạn chót của tác vụ **${id}** sẽ đến hạn vào ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tác vụ ${id} đã bị xóa.`;
                },
                description(id: string): string {
                    return `Tác vụ ${id} đã bị xóa.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tác vụ ${id} đã được lặp lại.`;
                },
                description(id: string): string {
                    return `Tác vụ ${id} đã được lặp lại và trạng thái được đặt thành cần làm.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tác vụ ${id} đã được tạo.`;
                },
                description(task_text: string, id: string): string {
                    return `Tác vụ ${id} đã được tạo với nội dung: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tác vụ ${id} đã được cập nhật.`;
                },
                description(id: string): string {
                    return `Tác vụ ${id} đã được cập nhật và các dữ liệu sau đã thay đổi.`;
                }
            },
            ticket_created: {
                title(id: string): string {
                    return `Ticket ${id} đã được tạo`;
                }
            },
            ticket_updated: {
                title(id: string): string {
                    return `Ticket ${id} đã được cập nhật`;
                }
            },
            ticket_deleted: {
                title(id: string): string {
                    return `Ticket ${id} đã bị xóa`;
                }
            },
            project_created: {
                title: "Dự án đã được tạo",
                description(projectName: string): string {
                    return `Dự án ${projectName} đã được tạo`;
                }
            },
            project_deleted: {
                title: "Dự án đã bị xóa",
                description(projectName: string): string {
                    return `Dự án ${projectName} đã bị xóa`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Trạng thái tác vụ ${id} đã thay đổi`;
                }
            },
            permission_granted: {
                title: "Đã cấp quyền",
            },
            permission_revoked: {
                title: "Đã thu hồi quyền",
            },
            preset_applied: {
                title: "Đã áp dụng cài đặt sẵn",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Hạn chót của tác vụ ${id} đã quá hạn`;
                }
            },
            project_updated: {
                title: "Dự án đã được cập nhật",
                description(name: string): string {
                    return `Dự án ${name} đã được cập nhật`;
                }
            },
            test_message: {
                title: "Đây là tin nhắn kiểm tra",
                description: "Nếu bạn thấy tin nhắn này, webhook đang hoạt động chính xác và tính năng ghi nhật ký đã được bật."
            },
            comment_added: {
                title(id: string): string {
                    return `Đã thêm bình luận vào tác vụ ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Đã xóa bình luận khỏi tác vụ ${id}`;
                }
            },
            topic_created: {
                title: "Chủ đề đã được tạo",
                description(name: string): string {
                    return `Chủ đề ${name} đã được tạo`;
                }
            },
            topic_updated: {
                title: "Chủ đề đã được cập nhật",
                description(name: string): string {
                    return `Chủ đề ${name} đã được cập nhật`;
                }
            },
            topic_deleted: {
                title: "Chủ đề đã bị xóa",
                description(name: string): string {
                    return `Chủ đề ${name} đã bị xóa`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Tài liệu ${id} đã được tạo`;
                },
                description(name: string): string {
                    return `Tài liệu ${name} đã được tạo`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Tài liệu ${id} đã được cập nhật`;
                },
                description(name: string): string {
                    return `Tài liệu ${name} đã được cập nhật`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Tài liệu ${id} đã bị xóa`;
                },
                description(name: string): string {
                    return `Tài liệu ${name} đã bị xóa`;
                }
            },
            label_created: {
                title: "Nhãn đã được tạo",
                description(name: string): string {
                    return `Nhãn ${name} đã được tạo`;
                }
            },
            label_updated: {
                title: "Nhãn đã được cập nhật",
                description(name: string): string {
                    return `Nhãn ${name} đã được cập nhật`;
                }
            },
            label_deleted: {
                title: "Nhãn đã bị xóa",
                description(name: string): string {
                    return `Nhãn ${name} đã bị xóa`;
                }
            },
            attachments_field: "Tệp đính kèm",
            milestone_created: {
                title: "Cột mốc đã được tạo",
            },
            milestone_updated: {
                title: "Cột mốc đã được cập nhật",
            },
            milestone_deleted: {
                title: "Cột mốc đã bị xóa",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `Sự kiện sắp diễn ra (${id}) **${name}** sẽ bắt đầu trong ${durationTillEventMinutes} phút lúc ${startTime} trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Bạn đã được mời tham gia sự kiện ${eventId} bởi <@${inviterId}>: **${eventName}** bắt đầu lúc ${start} và kết thúc lúc ${end}.\n-# Tất cả ngày giờ được tính theo ${timezone}. Dùng \"/settings timezone\" để thay đổi múi giờ cho toàn bộ không gian làm việc, hoặc \"/preferences timezone\" để thay đổi múi giờ của riêng bạn.`;
                },
                accept_button: "Chấp nhận",
                deny_button: "Từ chối"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> đã cập nhật sự kiện ${eventId}: **${eventName}** bắt đầu lúc ${start} và kết thúc lúc ${end}.\n-# Tất cả ngày giờ được tính theo ${timezone}. Dùng \"/settings timezone\" để thay đổi múi giờ cho toàn bộ không gian làm việc, hoặc \"/preferences timezone\" để thay đổi múi giờ của riêng bạn.`
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `Đặt lịch của bạn cho ${workspaceName} sẽ bắt đầu sau khoảng ${durationTillEventMinutes} phút (${start} - ${end}, ${timezone}).${location}`;
                },
                title: "Nhắc nhở đặt lịch sắp tới",
                manage_bookings_button: "Quản lý đặt lịch",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Bạn đã được cấp một suất trả phí trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>). Hiện bạn có quyền truy cập các tính năng có trong suất Starter hoặc Pro được cấp.`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `Người dùng **${requesterUsername}** đã yêu cầu một suất trả phí trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>). Quản trị viên không gian làm việc có thể cấp bất kỳ suất Starter hoặc Pro chưa được chỉ định nào bằng nút bên dưới. Nếu không gian làm việc cần thêm suất, hãy truy cập [cài đặt không gian làm việc](<https://bnder.net/app/settings/${guildId}/default?tab=1>) để mua suất.`;
        },
        request_pro_seat_button_label: "Cấp suất trả phí",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Cần hành động: Thanh toán đăng ký suất trả phí thất bại
Chúng tôi không thể xử lý thanh toán cho một hoặc nhiều suất Starter hoặc Pro trên [${guildName}](<https://discord.com/channels/${guildId}>). Để tránh mất quyền truy cập suất trả phí, vui lòng [cập nhật thông tin thanh toán và thanh toán hóa đơn ngay](<${customerPortalLink}>).

Các suất trả phí bị ảnh hưởng sẽ sớm ngừng đóng góp nếu không có hành động nào được thực hiện.

Cần trợ giúp? [Liên hệ hỗ trợ](https://bnder.net/discord) — chúng tôi luôn sẵn sàng hỗ trợ.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Tệp **${fileName}** đã được chia sẻ với bạn trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>) bởi <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Thư mục **${folderName}** đã được chia sẻ với bạn trong không gian làm việc [${guildName}](<https://discord.com/channels/${guildId}>) bởi <@${userId}>`;
            }
        },
        self_data_download_ready: "Dữ liệu của bạn đã sẵn sàng để tải xuống. Bạn có thể tải xuống trong [ứng dụng của chúng tôi](<https://bnder.net/app/>). Liên kết tải xuống có hiệu lực trong hai tuần.",
        tutorial_tasks: {
            tutorial_label_name: "Hướng dẫn",
            create_first_task_title: "Tạo tác vụ đầu tiên của bạn",
            create_first_task_description: "Bắt đầu bằng cách tạo một tác vụ. Đặt tên cho tác vụ và thêm mô tả nếu cần.",
            change_task_status_title: "Thay đổi trạng thái tác vụ",
            change_task_status_description: "Thay đổi trạng thái của tác vụ thành 'Đang thực hiện' hoặc 'Hoàn tất' bằng cách kéo tác vụ vào cột tương ứng.",
            invite_team_members_title: "Mời thành viên nhóm của bạn",
            invite_team_members_description: "Mời thành viên nhóm tham gia không gian làm việc của bạn. Họ sẽ thấy lời mời trong phần cài đặt người dùng.",
            explore_workspace_title: "Khám phá không gian làm việc",
            explore_workspace_description: "Khám phá không gian làm việc và làm quen với các tính năng. Bạn có thể tạo tác vụ, quản lý thành viên và nhiều thao tác khác. Bạn cũng có thể xem phần cài đặt để điều chỉnh định dạng ngày, ngôn ngữ và múi giờ."
        },
        mails: {
            footer: {
                company_limited_liability: "công ty trách nhiệm hữu hạn (UG)",
                company_address: "Im Flath 12 - 38542 Leiferde - Đức",
                company_register_court: "Tòa án địa phương Hildesheim (Đức) - HRB 209373",
                company_ceo: "Giám đốc điều hành: Jan Brinkmann",
                company_contact: "Email: contact@bnder.net - Điện thoại: +49 511 80764975",
                legal_automated_email: "Đây là email tự động. Vui lòng không trả lời email này.",
                legal_privacy_policy_prefix: "Vui lòng đọc chính sách quyền riêng tư của chúng tôi tại",
                legal_imprint: "Thông tin pháp lý",
                legal_terms_of_use: "Điều khoản sử dụng",
                legal_privacy_policy: "Chính sách quyền riêng tư",
            },
            verify_email: {
                headline: "Xác minh địa chỉ email của bạn",
                text: "Vui lòng xác nhận địa chỉ email của bạn bằng cách nhấp vào liên kết bên dưới.",
                primaryActionText: "Xác minh email",
            },
            password_changed: {
                headline: "Mật khẩu đã được thay đổi",
                text: "Mật khẩu của bạn đã được thay đổi thành công. Nếu bạn không thực hiện thay đổi này, vui lòng liên hệ ngay với bộ phận hỗ trợ tại contact@bnder.net",
            },
            reset_password: {
                headline: "Đặt lại mật khẩu của bạn",
                text: "Để đặt lại mật khẩu, vui lòng nhấp vào nút bên dưới. Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.",
                primaryActionText: "Đặt lại mật khẩu",
            },
            workspace_invitation: {
                headline: "Lời mời vào không gian làm việc",
                text(workspaceName: string): string {
                    return `Bạn đã được mời tham gia không gian làm việc ${workspaceName}. Nhấp vào nút bên dưới để chấp nhận lời mời và tham gia không gian làm việc.`;
                },
                invitedBy(inviterLabel: string): string {
                    return `Được mời bởi: ${inviterLabel}`;
                },
                primaryActionText: "Tham gia không gian làm việc",
            },
            task_assigned: {
                subject: "Bạn đã được giao một tác vụ mới",
                greeting(guildName: string): string {
                    return `Bạn đã được giao một tác vụ trong không gian làm việc ${guildName}.`;
                },
                no_deadline: "Tác vụ này chưa đặt hạn chót.",
                open_in_app: "Mở trong ứng dụng",
            },
            primaryPasteActionLinkText: "Hoặc dán liên kết bên dưới vào trình duyệt của bạn:",
            task_subscriber: {
                added_subject: "Bạn đã được thêm làm người theo dõi của một tác vụ",
                subscriber_added(guildName: string): string {
                    return `Bạn đã được thêm làm người theo dõi của một tác vụ trong không gian làm việc ${guildName}. Bạn sẽ nhận được thông báo khi có thay đổi trong tác vụ này.`;
                },
                subject: "Thông báo cập nhật tác vụ",
                activity(guildName: string): string {
                    return `Một tác vụ mà bạn đang theo dõi trong không gian làm việc ${guildName} đã thay đổi.`;
                }
            },
            self_data_download_ready: {
                headline: "Dữ liệu của bạn đã sẵn sàng để tải xuống",
                text: "Chúng tôi đã chuẩn bị dữ liệu của bạn để tải xuống. Bạn có thể truy cập dữ liệu trong ứng dụng. Liên kết tải xuống có hiệu lực trong hai tuần.",
            },
            payment_failed: {
                headline: "🚨 Cần hành động: Thanh toán đăng ký suất trả phí thất bại",
                text(guildName: string): string {
                    return `Chúng tôi không thể xử lý thanh toán cho một hoặc nhiều suất Starter hoặc Pro trên ${guildName}. Để tránh mất quyền truy cập suất trả phí, vui lòng cập nhật thông tin thanh toán và thanh toán hóa đơn ngay. Các suất trả phí bị ảnh hưởng sẽ sớm ngừng đóng góp nếu không có hành động nào được thực hiện. Cần trợ giúp? Liên hệ hỗ trợ — chúng tôi luôn sẵn sàng hỗ trợ.`;
                },
                primaryActionText: "Cập nhật thông tin thanh toán"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "Ticket mới:",
                subject_prefix_update: "Cập nhật ticket:",
                subject_prefix_sla_warning: "Cảnh báo SLA của ticket:",
                subject_prefix_status(statusLabel: string): string {
                    return `Ticket ${statusLabel}:`;
                },
                body_created: "Một ticket mới đã được tạo.",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `Một tin nhắn công khai mới đã được đăng.\n\nTicket: ${ticketTitle}\n\nXem trước tin nhắn: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `Trạng thái ticket đã đổi thành \"${statusLabel}\".\n\nTicket: ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `Ticket đã tự động đóng vì không nhận được phản hồi từ người báo cáo trong khoảng thời gian đã cấu hình.\n\nTicket: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `Ticket này đã đạt ngưỡng cảnh báo SLA.\n\nTicket: ${ticketTitle}\nSLA: ${slaName}\nThời gian hiện tại: ${currentAge}\nMục tiêu: ${targetAge}`;
                },
                reporter_delivery_failed_note(failedRecipient: string): string {
                    return `Gửi email tới người báo cáo ${failedRecipient} thất bại. Người báo cáo có thể chưa nhận được cập nhật ticket mới nhất.`;
                },
                reporter_delivery_failed_status(status: string): string {
                    return `Trạng thái: ${status}`;
                },
                reporter_delivery_failed_diagnostic(diagnostic: string): string {
                    return `Chẩn đoán: ${diagnostic}`;
                },
                reporter_delivery_failed_original_subject(originalSubject: string): string {
                    return `Chủ đề gốc: ${originalSubject}`;
                },
                subject_prefix_sla_breach(stepLabel: string): string {
                    return `Vi phạm SLA của ticket: ${stepLabel}`;
                },
                headline_sla_breach(ticketTitle: string): string {
                    return `Vi phạm SLA: ${ticketTitle}`;
                },
                body_sla_breach(slaName: string, stepLabel: string, currentAge: string, targetAge: string): string {
                    return `SLA \"${slaName}\" đã bị vi phạm ở bước ${stepLabel}.\nThời gian hiện tại: ${currentAge}\nMục tiêu: ${targetAge}.`;
                },
                sla_step_first_response: "phản hồi đầu tiên",
                sla_step_next_response: "phản hồi tiếp theo",
                sla_step_resolution: "giải quyết",
                action_open_ticket: "Mở ticket",
                action_reply_to_ticket: "Trả lời ticket",
                action_unsubscribe: "Hủy theo dõi ticket này",
                footer_brand_context(displayName: string): string {
                    return `Gửi thay mặt ${displayName} qua Bnder.`;
                },
                footer_brand_context_link_prefix(displayName: string): string {
                    return `Gửi thay mặt ${displayName} qua `;
                },
                footer_brand_context_link_suffix(): string {
                    return ".";
                },
                unknown_inbox_subject: "Địa chỉ hộp thư ticket không xác định",
                unknown_inbox_headline: "Địa chỉ hộp thư ticket không xác định",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `Chúng tôi đã nhận được email của bạn gửi tới ${recipientAddress}, nhưng địa chỉ hộp thư này chưa được cấu hình để tiếp nhận ticket. Không có ticket nào được tạo.\n\nVui lòng liên hệ đội ngũ hỗ trợ của bạn và yêu cầu địa chỉ email ticket theo dự án chính xác.`;
                },
                unknown_inbox_text_without_recipient: "Chúng tôi đã nhận được email của bạn, nhưng địa chỉ hộp thư này chưa được cấu hình để tiếp nhận ticket. Không có ticket nào được tạo.\n\nVui lòng liên hệ đội ngũ hỗ trợ của bạn và yêu cầu địa chỉ email ticket theo dự án chính xác.",
                feature_locked_subject: "Tính năng email ticket yêu cầu Pro",
                feature_locked_headline: "Tính năng email ticket yêu cầu Pro",
                feature_locked_text: "Chúng tôi đã nhận được email trả lời của bạn, nhưng tính năng trả lời ticket qua email chỉ khả dụng cho không gian làm việc Pro. Câu trả lời của bạn chưa được thêm vào ticket.\n\nVui lòng liên hệ đội ngũ hỗ trợ của bạn và đề nghị họ nâng cấp không gian làm việc lên Pro.",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `Ticket mới trong dự án ${projectId}: ${ticketTitle}`;
                },
                project_member_headline: "Một ticket mới đã được tạo",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `Một ticket mới đã được tạo trong dự án ${projectId}.\n\nTicket: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `Một ticket mới đã được tạo trong dự án **${projectId}**.\nTicket: [${ticketTitle}](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `Câu trả lời của bạn đã được thêm thành công vào cuộc hội thoại ticket.\n\nTicket: ${ticketTitle}`;
                },
                subject_assigned(ticketTitle: string): string {
                    return `Bạn đã được giao ticket: ${ticketTitle}`;
                },
                headline_assigned(ticketTitle: string): string {
                    return `Bạn đã được giao \"${ticketTitle}\"`;
                },
                body_assigned(ticketTitle: string): string {
                    return `Bạn đã được giao ticket \"${ticketTitle}\".`;
                },
                subject_reassigned(ticketTitle: string): string {
                    return `Ticket đã được giao lại cho bạn: ${ticketTitle}`;
                },
                headline_reassigned(ticketTitle: string): string {
                    return `Ticket đã được giao lại cho bạn: ${ticketTitle}`;
                },
                body_reassigned(ticketTitle: string): string {
                    return `Bạn hiện chịu trách nhiệm cho ticket \"${ticketTitle}\".`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**Bạn đã được giao \"${ticketTitle}\"**\nBạn đã được giao ticket \"${ticketTitle}\".\n\n[Mở ticket](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**Ticket đã được giao lại cho bạn: ${ticketTitle}**\nBạn hiện chịu trách nhiệm cho ticket \"${ticketTitle}\".\n\n[Mở ticket](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_assignee_reporter_update(ticketTitle: string): string {
                    return `Cập nhật từ người báo cáo trong ticket được giao: ${ticketTitle}`;
                },
                headline_assignee_reporter_update(ticketTitle: string): string {
                    return `Cập nhật từ người báo cáo trong \"${ticketTitle}\"`;
                },
                discord_dm_assignee_reporter_update(ticketTitle: string, notificationText: string, ticketUrl: string, ticketId: string): string {
                    return `Có cập nhật từ người báo cáo trong ticket được giao \"${ticketTitle}\".\n${notificationText}\n\n[Mở ticket](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_mentioned(ticketTitle: string): string {
                    return `Bạn được nhắc đến trong ticket: ${ticketTitle}`;
                },
                headline_mentioned(ticketTitle: string): string {
                    return `Bạn đã được nhắc đến trong \"${ticketTitle}\"`;
                },
                body_mentioned(messagePreview: string): string {
                    return `Xem trước tin nhắn: ${messagePreview}`;
                },
                discord_dm_mentioned(ticketTitle: string, messagePreview: string, ticketUrl: string, ticketId: string): string {
                    return `Bạn đã được nhắc đến trong ticket \"${ticketTitle}\".\nXem trước: ${messagePreview}\n\n[Mở ticket](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
            },

            open_app: "Mở ứng dụng",
        }
    }
}
