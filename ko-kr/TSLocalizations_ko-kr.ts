import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_ko_kr {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `작업 마감일 **${id}** ${taskTitle} 현재 위치 ${deadline} 작업 공간 [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `작업에 할당 된 **${id}** ${taskText} 작업 공간 [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `기타 ${id} 할당 된`;
            },
            assigned_embed_footer: "이 알림은 사용할 수 없습니다. \"/preferences direct_messages\" 명령.",
            assigned_embed_button_in_progress: "진행 중",
            assigned_embed_button_done: "완료로 표시",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `작업 마감일 **${id}** ${taskTitle} workspace에서 overdue [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `작업 **${id}** ${taskTitle} 당신은 반복되고 workspace에서 다시 행해야 할 할당됩니다 [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `기타 ${id} 반복되는`;
            },
            deadline_alert: "작업 마감",
            deadline_duration_due_now: "현재 위치",
            deadline_duration_until(duration: string): string {
                return `in ${duration}`;
            },
            deadline_duration_days(days: number): string {
                return `${days}d`;
            },
            deadline_duration_hours(hours: number): string {
                return `${hours}h`;
            },
            deadline_duration_minutes(minutes: number): string {
                return `${minutes}m`;
            },
            commented_embed_title(id: string): string {
                return `작업에 추가됨 ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `댓글이 workspace에서 작업에 추가되었습니다. [${guildName}](<https://discord.com/channels/${guildId}>) by ${author}: ${commentText}`;
            },
            comment_response_button: "댓글에 응답",
            stop_followup_reminder_button: "정지 후속 알림",
            extend_deadline_by_one_day_button: "연장 마감일 1일",
            extend_deadline_by_two_days_button: "마감일 2일",
            extend_deadline_by_one_week_button: "연장 마감일 1주일",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `당신은 작업의 가입자로 추가되었습니다 **${id}** ${taskText} 작업 공간 [${guildName}](<https://discord.com/channels/${guildId}>) by <@${addedBy}>. 이 작업을 변경할 때 알림을 받게 됩니다. 알림 수신을 중지하려면 아래 버튼을 클릭합니다.`;
            },
            subscriber_added_notification_unsubscribe_button: "구독하기",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `작업 **${id}** ${taskTitle} 당신은 workspace에 가입 [${guildName}](<https://discord.com/channels/${guildId}>) 수정 :`
            },
            subscriber_notification_footer: "이 작업을 위한 알림 사용 \"/task unsubscribe\" 이름 *",
            subscriber_embed_title(id: string): string {
                return `기타 ${id} (주)`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `이정표 **${milestoneName}** workspace에서 6시간 미만의 경우 [${guildName}](<https://discord.com/channels/${guildId}>) 완료해야 할 작업이 있습니다.`;
            },
            status_todo: "토토사이트",
            status_in_progress: "진행 중",
            status_done: "이름 *"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "이름 *",
            assignees_field: "이름 *",
            status_field: "주요연혁",
            todos_field: "도도스",
            delete_at_field: "계정 삭제",
            project_field: "회사연혁",
            topic_field: "이름 *",
            text_field: "이름 *",
            permission_field: "제출",
            role_field: "사이트맵",
            user_field: "사용자 이름",
            preset_field: "공지사항",
            priority_field: "회사연혁",
            type_field: "제품정보",
            reporter_field: "공지사항",
            label_field: "이름 *",
            manager_field: "회사연혁",
            repeat_interval_field: "일에서 반복 간격",
            repeat_end_date_field: "반복 끝 날짜",
            milestone_field: "마일스톤",
            due_date_field: "현재 위치",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "토토사이트";
                    case 1:
                        return "진행 중";
                    case 2:
                        return "이름 *";
                    default:
                        return "이름 *";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `작업에 대한 Deadline ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `작업 마감일 **${id}** 현재 위치 ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `기타 ${id} 로그아웃`;
                },
                description(id: string): string {
                    return `기타 ${id} 삭제되었습니다.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `기타 ${id} 반복.`;
                },
                description(id: string): string {
                    return `기타 ${id} 반복되고 상태는 todo로 설정되었습니다.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `기타 ${id} 로그인`;
                },
                description(task_text: string, id: string): string {
                    return `기타 ${id} 텍스트로 만든: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `기타 ${id} 업데이트`;
                },
                description(id: string): string {
                    return `기타 ${id} 업데이트 된 다음 데이터가 변경되었습니다.`;
                }
            },
            ticket_created: {
                title(id: string): string {
                    return `요금안내 ${id} 제품정보`;
                }
            },
            ticket_updated: {
                title(id: string): string {
                    return `요금안내 ${id} (주)`;
                }
            },
            ticket_deleted: {
                title(id: string): string {
                    return `요금안내 ${id} 이름 *`;
                }
            },
            project_created: {
                title: "프로젝트 생성",
                description(projectName: string): string {
                    return `회사연혁 ${projectName} 수정하기`;
                }
            },
            project_deleted: {
                title: "프로젝트 삭제",
                description(projectName: string): string {
                    return `회사연혁 ${projectName} 삭제 된`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `기타 ${id} 상태 변경`;
                }
            },
            permission_granted: {
                title: "권한 부여",
            },
            permission_revoked: {
                title: "제출 취소",
            },
            preset_applied: {
                title: "Preset 적용",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `작업에 대한 Deadline ${id} 이름 *`;
                }
            },
            project_updated: {
                title: "업데이트",
                description(name: string): string {
                    return `회사연혁 ${name} 업데이트`;
                }
            },
            test_message: {
                title: "이것은 테스트 메시지입니다.",
                description: "이 메시지를 보시려면 webhook이 올바르게 작동하고 로그인이 활성화됩니다."
            },
            comment_added: {
                title(id: string): string {
                    return `작업에 추가됨 ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `댓글에서 삭제됨 ${id}`;
                }
            },
            topic_created: {
                title: "Topic 생성",
                description(name: string): string {
                    return `이름 * ${name} 수정하기`;
                }
            },
            topic_updated: {
                title: "업데이트",
                description(name: string): string {
                    return `이름 * ${name} 업데이트`;
                }
            },
            topic_deleted: {
                title: "비밀번호",
                description(name: string): string {
                    return `이름 * ${name} 삭제 된`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `회사연혁 ${id} 제품정보`;
                },
                description(name: string): string {
                    return `회사연혁 ${name} 수정하기`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `회사연혁 ${id} (주)`;
                },
                description(name: string): string {
                    return `회사연혁 ${name} 업데이트`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `회사연혁 ${id} 이름 *`;
                },
                description(name: string): string {
                    return `회사연혁 ${name} 삭제 된`;
                }
            },
            label_created: {
                title: "상표 생성",
                description(name: string): string {
                    return `이름 * ${name} 수정하기`;
                }
            },
            label_updated: {
                title: "업데이트",
                description(name: string): string {
                    return `이름 * ${name} 업데이트`;
                }
            },
            label_deleted: {
                title: "비밀번호",
                description(name: string): string {
                    return `이름 * ${name} 삭제 된`;
                }
            },
            attachments_field: "첨부파일",
            milestone_created: {
                title: "Milestone 생성",
            },
            milestone_updated: {
                title: "Milestone 업데이트",
            },
            milestone_deleted: {
                title: "Milestone 삭제",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `다가오는 행사 (${id}) **${name}** 시작하기 ${durationTillEventMinutes} 오시는 길 ${startTime} in [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `이벤트에 초대되었습니다. ${eventId} by <@${inviterId}>: **${eventName}** 시작하기 ${start} 관련 기사 ${end}.\n-# 모든 날짜는 계산됩니다 ${timezone}. 이용 \"/settings timezone\" 전체 작업 공간의 시간대를 변경하려면 \"/preferences timezone\" 자주 묻는 질문`;
                },
                accept_button: "이름 *",
                deny_button: "프랑스어"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> 이벤트 업데이트 ${eventId}: **${eventName}** 시작하기 ${start} 관련 기사 ${end}.\n-# 모든 날짜는 계산됩니다 ${timezone}. 이용 \"/settings timezone\" 전체 작업 공간의 시간대를 변경하려면 \"/preferences timezone\" 자주 묻는 질문`
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `자주 묻는 질문 ${workspaceName} 에 대해 ${durationTillEventMinutes} 분 (${start} - ${end}, ${timezone}).${location}`;
                },
                title: "예약 알림",
                manage_bookings_button: "자주 묻는 질문",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `작업 공간에서 유료 좌석을 할당했습니다. [${guildName}](<https://discord.com/channels/${guildId}>). 이제 지정된 스타터 또는 프로 시트에 포함 된 기능에 액세스 할 수 있습니다.`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `사용자 이름 **${requesterUsername}** workspace에서 유료 좌석을 요청했습니다. [${guildName}](<https://discord.com/channels/${guildId}>). Workspace 관리자는 아래 버튼을 사용하여 지정된 Starter 또는 Pro 시트를 할당할 수 있습니다. 작업 공간이 더 많은 좌석을 필요로한다면, 방문 [workspace settings](<https://bnder.net/app/settings/${guildId}/default?tab=1>) 좌석 구입.`;
        },
        request_pro_seat_button_label: "보조금 지급",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 3-7 작업 필요 : 유료 좌석 구독에 실패
우리는 하나 이상의 스타터 또는 Pro 좌석에 대한 지불을 처리 할 수 없습니다 [${guildName}](<https://discord.com/channels/${guildId}>). 유료 좌석 액세스를 피하기 위해, [결제 정보 업데이트 및 지금 청구](<${customerPortalLink}>).

유료 좌석은 작업이 이루어지지 않으면 즉시 기여할 것입니다.

도움이 필요하십니까? [문의](https://bnder.net/discord) — 우리는 당신을 위해 여기 있습니다.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `파일 형식 **${fileName}** workspace에서 공유되었습니다. [${guildName}](<https://discord.com/channels/${guildId}>) by <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `폴더 **${folderName}** workspace에서 공유되었습니다. [${guildName}](<https://discord.com/channels/${guildId}>) by <@${userId}>`;
            }
        },
        self_data_download_ready: "귀하의 데이터는 다운로드 준비가 되어 있습니다. 다운로드 할 수 있습니다. [our app](<https://bnder.net/app/>). 다운로드 링크는 2 주 동안 가능합니다.",
        tutorial_tasks: {
            tutorial_label_name: "다운로드",
            create_first_task_title: "첫 번째 작업 만들기",
            create_first_task_description: "작업을 시작하세요. 이름과 선택적으로 설명을 제공합니다.",
            change_task_status_title: "작업 상태 변경",
            change_task_status_description: "작업의 상태를 'In Progress' 또는 'Done'로 변경하여 각 열에 드래그합니다.",
            invite_team_members_title: "팀 구성원",
            invite_team_members_description: "팀 구성원을 초대하여 작업 공간에 참여하십시오. 그들은 그들의 사용자 설정에 초대를 볼 것입니다.",
            explore_workspace_title: "업무 공간 살펴보기",
            explore_workspace_description: "작업 공간을 탐험하고 기능에 익숙합니다. 작업, 관리 회원 등을 만들 수 있습니다. 날짜 형식, 언어 및 시간대를 조정하기 위해 설정을 살펴볼 수도 있습니다."
        },
        mails: {
            footer: {
                company_limited_liability: "제한적 책임 회사 (UG)",
                company_address: "Im Flath 12 - 38542 Leiferde - 독일",
                company_register_court: "Hildesheim 지구 법원 (독일) - HRB 209373",
                company_ceo: "CEO: 1월 Brinkmann",
                company_contact: "전화: +49 511 80764975",
                legal_automated_email: "자동화된 이메일입니다. 이 이메일에 회신하지 마십시오.",
                legal_privacy_policy_prefix: "개인정보 보호정책",
                legal_imprint: "관련 기사",
                legal_terms_of_use: "이용 약관",
                legal_privacy_policy: "개인 정보 보호 정책",
            },
            verify_email: {
                headline: "자주 묻는 질문",
                text: "아래 링크를 클릭하여 이메일 주소를 확인하십시오.",
                primaryActionText: "비밀번호",
            },
            password_changed: {
                headline: "비밀번호 변경",
                text: "비밀번호가 성공적으로 변경되었습니다. 이 변경을 시작하지 않았다면 contact@bnder.net로 즉시 지원하십시오.",
            },
            reset_password: {
                headline: "비밀번호 재설정",
                text: "비밀번호를 재설정하려면 아래 버튼을 클릭하십시오. 암호 재설정을 요청하지 않은 경우,이 이메일을 무시하십시오.",
                primaryActionText: "비밀번호 재설정",
            },
            workspace_invitation: {
                headline: "작업 공간 안내",
                text(workspaceName: string): string {
                    return `Workspace에 초대되었습니다. ${workspaceName}. 아래의 버튼을 클릭하여 초대를 받아 작업 공간에 가입하십시오.`;
                },
                invitedBy(inviterLabel: string): string {
                    return `에 의해 초대: ${inviterLabel}`;
                },
                primaryActionText: "Workspace에 대하여",
            },
            task_assigned: {
                subject: "새 작업을 할당했습니다.",
                greeting(guildName: string): string {
                    return `작업 영역에서 작업에 할당되었습니다. ${guildName}.`;
                },
                no_deadline: "이 작업을 위한 마감일 설정 없음.",
                open_in_app: "앱 열기",
            },
            primaryPasteActionLinkText: "또는 브라우저 아래에 링크 붙여넣기:",
            task_subscriber: {
                added_subject: "당신은 작업의 가입자로 추가되었습니다",
                subscriber_added(guildName: string): string {
                    return `작업 공간의 구독자로 추가되었습니다. ${guildName}. 이 작업을 변경할 때 알림을 받게 됩니다.`;
                },
                subject: "작업 업데이트 알림",
                activity(guildName: string): string {
                    return `Workspace에 가입한 작업 ${guildName} 수정되었습니다.`;
                }
            },
            self_data_download_ready: {
                headline: "귀하의 데이터는 다운로드 준비가 되어 있습니다.",
                text: "우리는 다운로드에 대한 데이터를 준비했습니다. 앱에 액세스 할 수 있습니다. 다운로드 링크는 2 주 동안 가능합니다.",
            },
            payment_failed: {
                headline: "ð ̈ Action Needed: 유료 좌석 구독에 실패",
                text(guildName: string): string {
                    return `우리는 하나 이상의 스타터 또는 Pro 좌석에 대한 지불을 처리 할 수 없습니다 ${guildName}. 유료 좌석 액세스를 피하기 위해 지불 정보를 업데이트하고 지금 청구서를 지불하십시오. 유료 좌석은 작업이 이루어지지 않으면 즉시 기여할 것입니다. 도움이 필요하십니까? 연락 지원 - 우리는 당신을 위해 여기에 있습니다.`;
                },
                primaryActionText: "업데이트 결제 정보"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "새로운 티켓:",
                subject_prefix_update: "티켓 업데이트:",
                subject_prefix_sla_warning: "요금안내 SLA 경고:",
                subject_prefix_status(statusLabel: string): string {
                    return `요금안내 ${statusLabel}:`;
                },
                body_created: "새로운 티켓이 생성되었습니다.",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `새로운 공개 메시지가 게시되었습니다.\n\nTicket: ${ticketTitle}\n\nMessage 미리보기: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `티켓 상태는 "로 변경${statusLabel}".\n\nTicket: ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `표시된 시간 창에서 수신되지 않았기 때문에 티켓이 자동으로 닫혔습니다.\n\nTicket: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `이 티켓은 SLA 경고 임계값.\n\nTicket: ${ticketTitle}\nSLA: ${slaName}\nCurrent 나이: ${currentAge}\nTarget :: ${targetAge}`;
                },
                reporter_delivery_failed_note(failedRecipient: string): string {
                    return `이메일 발송 ${failedRecipient} 실패. 기자는 최신 티켓 업데이트를받지 않을 수 있습니다.`;
                },
                reporter_delivery_failed_status(status: string): string {
                    return `상태: ${status}`;
                },
                reporter_delivery_failed_diagnostic(diagnostic: string): string {
                    return `진단: ${diagnostic}`;
                },
                reporter_delivery_failed_original_subject(originalSubject: string): string {
                    return `이름: ${originalSubject}`;
                },
                subject_prefix_sla_breach(stepLabel: string): string {
                    return `요금안내 SLA 지불 조건: ${stepLabel}`;
                },
                headline_sla_breach(ticketTitle: string): string {
                    return `SLA 지불 조건: ${ticketTitle}`;
                },
                body_sla_breach(slaName: string, stepLabel: string, currentAge: string, targetAge: string): string {
                    return `SLA "${slaName}"에 대한 위반 ${stepLabel}.\n현재 연령: ${currentAge}\nTarget :: ${targetAge}.`;
                },
                sla_step_first_response: "첫 번째 응답",
                sla_step_next_response: "다음 응답",
                sla_step_resolution: "제품 설명",
                action_open_ticket: "공지사항",
                action_reply_to_ticket: "티켓 받기",
                action_unsubscribe: "이 표에서 취소",
                footer_brand_context(displayName: string): string {
                    return `자주 묻는 질문 ${displayName} Bnder를 통해.`;
                },
                footer_brand_context_link_prefix(displayName: string): string {
                    return `자주 묻는 질문 ${displayName} 이름 * `;
                },
                footer_brand_context_link_suffix(): string {
                    return ".";
                },
                unknown_inbox_subject: "알 수없는 티켓 inbox 주소",
                unknown_inbox_headline: "알 수없는 티켓 inbox 주소",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `우리는 당신의 이메일을 받았습니다 ${recipientAddress}, 그러나이 inbox 주소는 티켓 입구에 구성되지 않습니다. 티켓이 생성되지 않았습니다.\n\nPlease는 지원 팀에 연락하고 올바른 프로젝트 별 티켓 이메일 주소를 요청하십시오.`;
                },
                unknown_inbox_text_without_recipient: "우리는 당신의 이메일을 받았습니다, 그러나 이 inbox 주소는 표 입구를 위해 형성되지 않습니다. 티켓은 없습니다.\n\n지원팀에 문의하고 정확한 프로젝트별 티켓 이메일 주소를 요청하십시오.",
                feature_locked_subject: "티켓 이메일 기능은 Pro",
                feature_locked_headline: "티켓 이메일 기능은 Pro",
                feature_locked_text: "우리는 이메일 답변을 받았지만 티켓에 대한 답변은 Pro workspace에서만 가능합니다. 답변은 티켓에 추가되지 않았습니다.\n\n지원팀에 연락하여 업무 영역을 Pro로 업그레이드하십시오.",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `프로젝트의 새로운 티켓 ${projectId}: ${ticketTitle}`;
                },
                project_member_headline: "새로운 티켓이 생성되었습니다.",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `새로운 티켓은 프로젝트에서 만들어졌습니다. ${projectId}.\n티켓: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `프로젝트 **${projectId}**에 새 티켓이 생성되었습니다.
티켓: [${ticketTitle}](<${ticketUrl}>)
ID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `답변이 티켓 대화에 성공적으로 추가되었습니다.

티켓: ${ticketTitle}`;
                },
                subject_assigned(ticketTitle: string): string {
                    return `티켓이 할당되었습니다: ${ticketTitle}`;
                },
                headline_assigned(ticketTitle: string): string {
                    return `"${ticketTitle}" 티켓이 할당되었습니다`;
                },
                body_assigned(ticketTitle: string): string {
                    return `"${ticketTitle}" 티켓이 할당되었습니다.`;
                },
                subject_reassigned(ticketTitle: string): string {
                    return `티켓이 다시 할당되었습니다: ${ticketTitle}`;
                },
                headline_reassigned(ticketTitle: string): string {
                    return `티켓이 다시 할당되었습니다: ${ticketTitle}`;
                },
                body_reassigned(ticketTitle: string): string {
                    return `이제 "${ticketTitle}" 티켓을 담당합니다.`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**"${ticketTitle}" 티켓이 할당되었습니다**
"${ticketTitle}" 티켓이 할당되었습니다.

[티켓 열기](<${ticketUrl}>)
ID: \`${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**티켓이 다시 할당되었습니다: ${ticketTitle}**
이제 "${ticketTitle}" 티켓을 담당합니다.

[티켓 열기](<${ticketUrl}>)
ID: \`${ticketId}\``;
                },
                subject_assignee_reporter_update(ticketTitle: string): string {
                    return `할당된 티켓의 요청자 업데이트: ${ticketTitle}`;
                },
                headline_assignee_reporter_update(ticketTitle: string): string {
                    return `"${ticketTitle}"의 요청자 업데이트`;
                },
                discord_dm_assignee_reporter_update(ticketTitle: string, notificationText: string, ticketUrl: string, ticketId: string): string {
                    return `할당된 티켓 "${ticketTitle}"의 요청자가 업데이트되었습니다.
${notificationText}

[티켓 열기](<${ticketUrl}>)
ID: \`${ticketId}\``;
                },
                subject_mentioned(ticketTitle: string): string {
                    return `티켓에서 멘션됨: ${ticketTitle}`;
                },
                headline_mentioned(ticketTitle: string): string {
                    return `"${ticketTitle}"에서 멘션되었습니다`;
                },
                body_mentioned(messagePreview: string): string {
                    return `메시지 미리보기: ${messagePreview}`;
                },
                discord_dm_mentioned(ticketTitle: string, messagePreview: string, ticketUrl: string, ticketId: string): string {
                    return `"${ticketTitle}" 티켓에서 멘션되었습니다.
미리보기: ${messagePreview}

[티켓 열기](<${ticketUrl}>)
ID: \`${ticketId}\``;
                },
            },

            open_app: "앱 열기",
        }
    }
}
