import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_vi_vn {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `The deadline for task **${id}** ${taskTitle} is due on ${deadline} in workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `You have been assigned to task **${id}** ${taskText} in workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Tác vụ${id}Đã gán`;
            },
            assigned_embed_footer: "Những thông báo này có thể bị tắt bằng lệnh \"/p tương thích trực tiếp  thông báo\".",
            assigned_embed_button_in_progress: "Đánh dấu trong tiến trình",
            assigned_embed_button_done: "Đánh dấu xong",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `The deadline for task **${id}** ${taskTitle} is overdue in workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `The task **${id}** ${taskTitle} you are assigned to has been repeated and needs to be done again in workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tác vụ${id}lặp lại`;
            },
            deadline_alert: "Thời hạn tác vụ",
            deadline_duration_due_now: "due now",
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
                return `A comment was added to a task in workspace [${guildName}](<https://discord.com/channels/${guildId}>) by ${author}: ${commentText}`;
            },
            comment_response_button: "Đáp ứng lời bình luận",
            stop_followup_reminder_button: "Dừng nhắc nhở theo dõi",
            extend_deadline_by_one_day_button: "Thời hạn mở rộng bởi 1 ngày",
            extend_deadline_by_two_days_button: "Thời hạn mở rộng 2 ngày",
            extend_deadline_by_one_week_button: "Hạn chót mở rộng là 1 tuần",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `You have been added as a subscriber of task **${id}** ${taskText} in workspace [${guildName}](<https://discord.com/channels/${guildId}>) by <@${addedBy}>. You will receive notifications when something changes in this task. If you want to stop receiving notifications, you can click the button below.`;
            },
            subscriber_added_notification_unsubscribe_button: "Hành động",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `The task **${id}** ${taskTitle} you are subscribed to in workspace [${guildName}](<https://discord.com/channels/${guildId}>) changed:`
            },
            subscriber_notification_footer: "Tắt thông báo cho nhiệm vụ này bằng lệnh \"/taskSke\"",
            subscriber_embed_title(id: string): string {
                return `Tác vụ${id}Cập nhật`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `The milestone **${milestoneName}** is due in less than 6 hours in workspace [${guildName}](<https://discord.com/channels/${guildId}>) and has tasks that need to be completed.`;
            },
            status_todo: "Todo",
            status_in_progress: "Tiến hành",
            status_done: "Hoàn tất"
        },
        webhookLogging: {
            id_field: "Id",
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
                title: "This is a test message",
                description: "If you see this message, the webhook is working correctly and the logging is enabled."
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
                return `Upcoming event (${id}) **${name}** is starting in ${durationTillEventMinutes} minutes at ${startTime} in [${guildName}](<https://discord.com/channels/${guildId}>).`;
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
            return `You have been assigned a paid seat in workspace [${guildName}](<https://discord.com/channels/${guildId}>). You now have access to the features included in your assigned Starter or Pro seat.`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `The user **${requesterUsername}** has requested a paid seat in workspace [${guildName}](<https://discord.com/channels/${guildId}>). Workspace admins can assign any unassigned Starter or Pro seat using the button below. If the workspace needs more seats, visit [workspace settings](<https://bnder.net/app/settings/${guildId}/default?tab=1>) to buy seats.`;
        },
        request_pro_seat_button_label: "Grant trả tiền chỗ ngồi",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# Cần hành động: Trả tiền thất bại vì phục vụ ở biển
We couldn’t process the payment for one or more Starter or Pro seats on [${guildName}](<https://discord.com/channels/${guildId}>). To avoid losing paid-seat access, please [update your payment info and pay your invoice now](<${customerPortalLink}>).

Nếu không có hành động, ghế ngồi có ảnh hưởng sẽ ngừng đóng góp ngay.

Need help? [Contact support](https://bnder.net/discord) — we’re here for you.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `The file **${fileName}** was shared with you in workspace [${guildName}](<https://discord.com/channels/${guildId}>) by <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `The folder **${folderName}** was shared with you in workspace [${guildName}](<https://discord.com/channels/${guildId}>) by <@${userId}>`;
            }
        },
        self_data_download_ready: "Your data is ready for download. You can download it in [our app](<https://bnder.net/app/>). The download link is available for two weeks.",
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
                legal_automated_email: "This is an automated email. Please do not reply to this email.",
                legal_privacy_policy_prefix: "Please read our privacy policy at",
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
                    return `You have been assigned to a task in workspace ${guildName}.`;
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
                    return `We couldn’t process the payment for one or more Starter or Pro seats on ${guildName}. To avoid losing paid-seat access, please update your payment info and pay your invoice now. Affected paid seats will stop contributing soon if no action is taken. Need help? Contact support — we’re here for you.`;
                },
                primaryActionText: "Cập nhật thông tin chi trả"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "Vé mới:",
                subject_prefix_update: "Cập nhật vé:",
                subject_prefix_sla_warning: "Ticket SLA Warning:",
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
                    return `The ticket was automatically closed because no reporter response was received within the configured time window.\n\nTicket: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `This ticket reached its SLA warning threshold.\n\nTicket: ${ticketTitle}\nSLA: ${slaName}\nCurrent age: ${currentAge}\nTarget: ${targetAge}`;
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
                    return `Ticket SLA Breach: ${stepLabel}`;
                },
                headline_sla_breach(ticketTitle: string): string {
                    return `SLA Breach: ${ticketTitle}`;
                },
                body_sla_breach(slaName: string, stepLabel: string, currentAge: string, targetAge: string): string {
                    return `SLA "${slaName}" breached for ${stepLabel}.\nCurrent age: ${currentAge}\nTarget: ${targetAge}.`;
                },
                sla_step_first_response: "phản ứng đầu tiên",
                sla_step_next_response: "next response",
                sla_step_resolution: "resolution",
                action_open_ticket: "Mở thẻ",
                action_reply_to_ticket: "Trả lời bảng chọn",
                action_unsubscribe: "Hung thủ đăng ký từ vé này",
                footer_brand_context(displayName: string): string {
                    return `Sent for ${displayName} via Bnder.`;
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
                feature_locked_subject: "Ticket email feature requires Pro",
                feature_locked_headline: "Ticket email feature requires Pro",
                feature_locked_text: "We received your email reply, but reply-by-email for tickets is available on Pro workspaces only. Your reply was not added to the ticket.\n\nPlease contact your support team and ask them to upgrade the workspace to Pro.",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `Vé mới trong dự án${projectId}: ${ticketTitle}`;
                },
                project_member_headline: "Một vé mới đã được tạo ra",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `A new ticket was created in project ${projectId}.\n\nTicket: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `A new ticket was created in project **${projectId}**.\nTicket: [${ticketTitle}](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `Your reply was successfully added to the ticket conversation.\n\nTicket: ${ticketTitle}`;
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
                    return `You are now responsible for ticket "${ticketTitle}".`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**You were assigned to "${ticketTitle}"**\nYou were assigned to ticket "${ticketTitle}".\n\n[Open ticket](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**Ticket reassigned to you: ${ticketTitle}**\nYou are now responsible for ticket "${ticketTitle}".\n\n[Open ticket](<${ticketUrl}>)\nID: \`${ticketId}\``;
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
