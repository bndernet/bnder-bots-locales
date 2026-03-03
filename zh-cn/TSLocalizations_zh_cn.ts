import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_zh_cn {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `任务 **${id}** ${taskTitle} 的截止日期为 ${deadline}，在服务器 [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `您已被分配到任务 **${id}** ${taskText}，在服务器 [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `任务 ${id} 已分配`;
            },
            assigned_embed_footer: "这些通知可以通过命令 \"/preferences direct_messages\" 禁用。",
            assigned_embed_button_in_progress: "标记为进行中",
            assigned_embed_button_done: "标记为完成",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `任务 **${id}** ${taskTitle} 的截止日期已过期，服务器 [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `任务 **${id}** ${taskTitle} 已被重复分配，您需要重新完成它，在服务器 [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `任务 ${id} 被重复分配`;
            },
            deadline_alert: "任务截止日期",
            commented_embed_title(id: string): string {
                return `任务 ${id} 添加了评论`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `在服务器 [${guildName}](<https://discord.com/channels/${guildId}>) 由 ${author} 添加了评论：${commentText}`;
            },
            comment_response_button: "回复评论",
            stop_followup_reminder_button: "停止后续提醒",
            extend_deadline_by_one_day_button: "延长截止日期 1 天",
            extend_deadline_by_two_days_button: "延长截止日期 2 天",
            extend_deadline_by_one_week_button: "延长截止日期 1 周",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `你已被 <@${addedBy}> 添加为任务 **${id}** ${taskText} 的订阅者，所在服务器为 [${guildName}](<https://discord.com/channels/${guildId}> )。当此任务发生变更时，你将收到通知。如果你想停止接收通知，可以点击下方按钮。`;
            },
            subscriber_added_notification_unsubscribe_button: "取消订阅",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `你在服务器 [${guildName}](<https://discord.com/channels/${guildId}> ) 订阅的任务 **${id}** ${taskTitle} 已发生更改:`
            },
            subscriber_notification_footer: "使用 \"/task unsubscribe\" 命令可禁用该任务的通知",
            subscriber_embed_title(id: string): string {
                return `任务 ${id} 已更新`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `里程碑 **${milestoneName}** 在服务器 [${guildName}](<https://discord.com/channels/${guildId}>) 中少于 6 小时后到期，并且有任务需要完成。`;
            },
            status_todo: "待办",
            status_in_progress: "进行中",
            status_done: "已完成"
        },
        webhookLogging: {
            id_field: "ID",
            deadline_field: "截止日期",
            assignees_field: "受指派人",
            status_field: "状态",
            todos_field: "待办事项",
            delete_at_field: "删除时间",
            project_field: "项目",
            topic_field: "主题",
            text_field: "文本",
            role_field: "角色",
            permission_field: "权限",
            user_field: "用户",
            preset_field: "预设",
            priority_field: "优先级",
            label_field: "标签",
            manager_field: "经理",
            repeat_interval_field: "重复间隔（天）",
            repeat_end_date_field: "重复结束日期",
            milestone_field: "里程碑",
            due_date_field: "到期日期",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "待办";
                    case 1:
                        return "进行中";
                    case 2:
                        return "已完成";
                    default:
                        return "未知";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `任务 ${id} 的截止日期`;
                },
                description(id: string, deadline: string): string {
                    return `任务 **${id}** 的截止日期是 ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `任务 ${id} 已删除。`;
                },
                description(id: string): string {
                    return `任务 ${id} 已删除。`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `任务 ${id} 被重复。`;
                },
                description(id: string): string {
                    return `任务 ${id} 已被重复，状态设置为待办。`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `任务 ${id} 已创建。`;
                },
                description(task_text: string, id: string): string {
                    return `任务 ${id} 已创建，文本为：${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `任务 ${id} 已更新。`;
                },
                description(id: string): string {
                    return `任务 ${id} 已更新，以下数据已更改。`;
                }
            },
            project_created: {
                title: "项目已创建",
                description(projectName: string): string {
                    return `项目 ${projectName} 已创建`;
                }
            },
            project_deleted: {
                title: "项目已删除",
                description(projectName: string): string {
                    return `项目 ${projectName} 已删除`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `任务 ${id} 状态已更改`;
                }
            },
            permission_granted: {
                title: "权限已授予",
            },
            permission_revoked: {
                title: "权限已撤销",
            },
            preset_applied: {
                title: "预设已应用",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `任务 ${id} 的截止日期已过期`;
                }
            },
            project_updated: {
                title: "项目已更新",
                description(name: string): string {
                    return `项目 ${name} 已更新`;
                }
            },
            test_message: {
                title: "这是测试消息",
                description: "如果您看到此消息，则表示Webhook工作正常，日志记录已启用。"
            },
            comment_added: {
                title(id: string): string {
                    return `任务 ${id} 添加了评论`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `任务 ${id} 的评论已删除`;
                }
            },
            topic_created: {
                title: "主题已创建",
                description(name: string): string {
                    return `主题 ${name} 已创建`;
                }
            },
            topic_updated: {
                title: "主题已更新",
                description(name: string): string {
                    return `主题 ${name} 已更新`;
                }
            },
            topic_deleted: {
                title: "主题已删除",
                description(name: string): string {
                    return `主题 ${name} 已删除`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `文档 ${id} 已创建`;
                },
                description(name: string): string {
                    return `文档 ${name} 已创建`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `文档 ${id} 已更新`;
                },
                description(name: string): string {
                    return `文档 ${name} 已更新`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `文档 ${id} 已删除`;
                },
                description(name: string): string {
                    return `文档 ${name} 已删除`;
                }
            },
            label_created: {
                title: "标签已创建",
                description(name: string): string {
                    return `标签 ${name} 已创建`;
                }
            },
            label_updated: {
                title: "标签已更新",
                description(name: string): string {
                    return `标签 ${name} 已更新`;
                }
            },
            label_deleted: {
                title: "标签已删除",
                description(name: string): string {
                    return `标签 ${name} 已删除`;
                }
            },
            attachments_field: "附件",
            milestone_created: {
                title: "里程碑已创建",
            },
            milestone_updated: {
                title: "里程碑已更新",
            },
            milestone_deleted: {
                title: "里程碑已删除",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `即将开始的活动（${id}）**${name}**将在 ${durationTillEventMinutes} 分钟后开始，时间为 ${startTime}，地点在 [${guildName}](<https://discord.com/channels/${guildId}>)。`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `你已被 <@${inviterId}> 邀请参加活动 ${eventId}: **${eventName}**，开始时间为 ${start}，结束时间为 ${end}。\n-# 所有日期均根据 ${timezone} 时区计算。使用 \"/settings timezone\" 可更改整个服务器的时区，或使用 \"/preferences timezone\" 更改你个人的时区。`;
                },
                accept_button: "接受",
                deny_button: "拒绝"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> 更新了活动 ${eventId}: **${eventName}**，开始时间为 ${start}，结束时间为 ${end}。\n-# 所有日期均根据 ${timezone} 时区计算。使用 \"/settings timezone\" 可更改整个服务器的时区，或使用 \"/preferences timezone\" 更改你个人的时区。`
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `你在 ${workspaceName} 的预订将在大约 ${durationTillEventMinutes} 分钟后开始（${start} - ${end}, ${timezone}）。${location}`;
                },
                title: "即将开始的预订提醒",
                manage_bookings_button: "管理预订",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `恭喜！您已在服务器 [${guildName}](<https://discord.com/channels/${guildId}>) 中被安排到专业席位。这意味着您现在可以使用 [专业功能](<https://bnder.net/pricing>)。尽情享受吧！`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `用户 **${requesterUsername}** 已在工作区 [${guildName}](<https://discord.com/channels/${guildId}>) 请求一个 Pro 席位。如果你有可用的 Pro 席位，可以使用下方按钮授予。如果需要更多 Pro 席位，请前往[工作区设置](<https://bnder.net/app/settings/${guildId}/default?tab=1>)升级你的订阅。`;
        },
        request_pro_seat_button_label: "授予 Pro 席位",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 需要采取行动：专业版订阅付款失败\n我们无法处理 [${guildName}](<https://discord.com/channels/${guildId}>) 上一个或多个专业版席位的付款。为避免无法使用专业版功能，请[立即更新您的付款信息并支付账单](<${customerPortalLink}>)。\n\n如果不采取任何措施，您的专业版功能将很快被禁用。\n\n需要帮助？[联系客服](https://bnder.net/discord)——我们随时为您服务。`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `文件 **${fileName}** 已由 <@${userId}> 在服务器 [${guildName}](<https://discord.com/channels/${guildId}>) 与您共享。`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `文件夹 **${folderName}** 已由 <@${userId}> 在服务器 [${guildName}](<https://discord.com/channels/${guildId}>) 与您共享。`;
            }
        },
        self_data_download_ready: "您的数据已准备好下载。您可以在 [我们的应用](<https://bnder.net/app/>) 中下载。下载链接有效期为两周。",
        tutorial_tasks: {
            tutorial_label_name: "教程",
            create_first_task_title: "创建你的第一个任务",
            create_first_task_description: "从创建一个任务开始。为它命名，并可选择添加描述。",
            change_task_status_title: "更改任务状态",
            change_task_status_description: "通过将任务拖动到相应的列，将任务状态更改为“进行中”或“已完成”。",
            invite_team_members_title: "邀请团队成员",
            invite_team_members_description: "邀请你的团队成员加入你的工作区。他们会在用户设置中看到邀请。",
            explore_workspace_title: "探索工作区",
            explore_workspace_description: "探索工作区并熟悉功能。你可以创建任务，管理成员等。你也可以查看设置，调整日期格式、语言和时区。"
        },
        mails: {
            footer: {
                company_limited_liability: "有限责任",
                company_address: "Im Flath 12 - 38542 Leiferde - 德国",
                company_register_court: "希尔德斯海姆地方法院 - HRB 209373",
                company_ceo: "执行董事: Jan Brinkmann",
                company_contact: "电子邮件: contact@bnder.net - 电话: +49 511 45032009",
                legal_automated_email: "此电子邮件为自动发送，请勿回复。",
                legal_privacy_policy_prefix: "我们的隐私政策见",
                legal_imprint: "法律声明",
                legal_terms_of_use: "使用条款",
                legal_privacy_policy: "隐私政策",
            },
            verify_email: {
                headline: "请确认您的电子邮件地址",
                text: "请点击下面的链接确认您的电子邮件地址。",
                primaryActionText: "确认电子邮件地址",
            },
            password_changed: {
                headline: "密码已更改",
                text: "您的密码已成功更改。如果这不是您本人操作，请立即联系 support: contact@bnder.net。",
            },
            reset_password: {
                headline: "重置密码",
                text: "要重置密码，请点击下面的按钮。如果您未请求密码重置，请忽略此邮件。",
                primaryActionText: "重置密码",
            },
            workspace_invitation: {
                headline: "工作区邀请",
                text(workspaceName: string): string {
                    return `您被邀请加入工作区 ${workspaceName}。点击下面的按钮接受邀请并加入工作区。`;
                },
                primaryActionText: "加入工作区",
            },
            task_assigned: {
                subject: "您已被分配一项新任务",
                greeting(guildName: string): string {
                    return `您已被分配到工作区 ${guildName} 中的一项任务。`;
                },
                no_deadline: "此任务未设定截止日期。",
                open_in_app: "在应用中打开",
            },
            primaryPasteActionLinkText: "或者将下面的链接复制到浏览器中：",
            task_subscriber: {
                added_subject: "您已被添加为任务的订阅者",
                subscriber_added(guildName: string): string {
                    return `您已被添加为工作区 ${guildName} 中某任务的订阅者。当该任务有任何更改时，您将收到通知。`;
                },
                subject: "任务更新通知",
                activity(guildName: string): string {
                    return `您在工作区 ${guildName} 订阅的任务已发生更改。`;
                }
            },
            self_data_download_ready: {
                headline: "您的数据已准备好下载",
                text: "我们已为您准备好数据，您可以在应用中访问。下载链接有效期为两周。",
            },
            payment_failed: {
                headline: "🚨 需要操作：Pro 订阅付款失败",
                text(guildName: string): string {
                    return `我们无法处理 ${guildName} 上一个或多个 Pro 席位的付款。为避免失去对 Pro 功能的访问，请立即更新您的付款信息并支付账单。如果不采取行动，您的 Pro 功能将很快被停用。需要帮助吗？请联系支持 — 我们随时为您服务。`;
                },
                primaryActionText: "更新付款信息"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "新工单:",
                subject_prefix_update: "工单更新:",
                subject_prefix_sla_warning: "工单 SLA 预警:",
                subject_prefix_status(statusLabel: string): string {
                    return `工单 ${statusLabel}:`;
                },
                body_created: "已创建新工单。",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `已发布新的公开消息。\n\n工单: ${ticketTitle}\n\n消息预览: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `工单状态已更改为 \"${statusLabel}\"。\n\n工单: ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `由于在配置的时间窗口内未收到报告人的回复，该工单已被自动关闭。\n\n工单: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `该工单已达到 SLA 预警阈值。\n\n工单: ${ticketTitle}\nSLA: ${slaName}\n当前时长: ${currentAge}\n目标: ${targetAge}`;
                },
                action_open_ticket: "打开工单",
                action_reply_to_ticket: "回复工单",
                action_unsubscribe: "取消订阅此工单",
                unknown_inbox_subject: "未知的工单收件地址",
                unknown_inbox_headline: "未知的工单收件地址",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `我们收到了您发送到 ${recipientAddress} 的邮件，但该收件地址未配置为工单接收地址。未创建任何工单。\n\n请联系您的支持团队，并索取正确的项目专用工单邮箱地址。`;
                },
                unknown_inbox_text_without_recipient: "我们收到了您的邮件，但该收件地址未配置为工单接收地址。未创建任何工单。\n\n请联系您的支持团队，并索取正确的项目专用工单邮箱地址。",
                feature_locked_subject: "工单邮件功能需要 Pro",
                feature_locked_headline: "工单邮件功能需要 Pro",
                feature_locked_text: "我们收到了您的邮件回复，但通过邮件回复工单仅在 Pro 工作区可用。您的回复未添加到工单中。\n\n请联系您的支持团队，并请他们将工作区升级到 Pro。",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `项目 ${projectId} 中有新工单: ${ticketTitle}`;
                },
                project_member_headline: "已创建新工单",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `项目 ${projectId} 中已创建新工单。\n\n工单: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `项目 **${projectId}** 中已创建新工单。\n工单: [${ticketTitle}](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `您的回复已成功添加到工单会话中。\n\n工单: ${ticketTitle}`;
                },
                subject_assigned(ticketTitle: string): string {
                    return `你被分配到了工单：${ticketTitle}`;
                },
                headline_assigned(ticketTitle: string): string {
                    return `你被分配到了“${ticketTitle}”`;
                },
                body_assigned(ticketTitle: string): string {
                    return `你被分配到了工单“${ticketTitle}”。`;
                },
                subject_reassigned(ticketTitle: string): string {
                    return `工单已重新分配给你：${ticketTitle}`;
                },
                headline_reassigned(ticketTitle: string): string {
                    return `工单已重新分配给你：${ticketTitle}`;
                },
                body_reassigned(ticketTitle: string): string {
                    return `你现在负责工单“${ticketTitle}”。`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**你被分配到了“${ticketTitle}”**\n你被分配到了工单“${ticketTitle}”。\n\n[打开工单](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**工单已重新分配给你：${ticketTitle}**\n你现在负责工单“${ticketTitle}”。\n\n[打开工单](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_assignee_reporter_update(ticketTitle: string): string {
                    return `已分配工单中的报告人更新：${ticketTitle}`;
                },
                headline_assignee_reporter_update(ticketTitle: string): string {
                    return `“${ticketTitle}”中的报告人更新`;
                },
                discord_dm_assignee_reporter_update(ticketTitle: string, notificationText: string, ticketUrl: string, ticketId: string): string {
                    return `已分配工单“${ticketTitle}”中的报告人更新。\n${notificationText}\n\n[打开工单](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_mentioned(ticketTitle: string): string {
                    return `工单中的提及：${ticketTitle}`;
                },
                headline_mentioned(ticketTitle: string): string {
                    return `你在“${ticketTitle}”中被提及了`;
                },
                body_mentioned(messagePreview: string): string {
                    return `消息预览：${messagePreview}`;
                },
                discord_dm_mentioned(ticketTitle: string, messagePreview: string, ticketUrl: string, ticketId: string): string {
                    return `你在工单“${ticketTitle}”中被提及了。\n预览：${messagePreview}\n\n[打开工单](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
            },

            open_app: "打开应用",
        }
    }

    constructor() {
    }
}